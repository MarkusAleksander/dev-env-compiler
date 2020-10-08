// This vanilla script allows configuration of a RichRelevance home page JSON placement API request.
// Placement items returned from the API request are inserted into a slick carousel (v1.8.1).
// Carousel item HTML template should be configured to your requirements.
// There is no need to edit below the final line of configuration. The remainder is core functionality that should only be updated if API documentation is updated.

console.clear();

// Required: RichRelevance server environment. For test environment, set to false. For live environment, set to true.
const rrIsLive = false;

// Required: RichRelevance placement name to retrieve. Obtained from RichRelevance Portal.
const rrPlacementName = "category_page.GiftsForHim";

// Required: RichRelevance page brand name to retrieve.
// const rrPageBrand = "Calvin Klein";

// Required: RichRelevance wrapper selector. This should be initially hidden with inline CSS ("display:none") so that we only display it once slick carousel has been initialised in order to avoid render-flicker.
const rrWrapperSelector = ".carousel-container";

// Required: RichRelevance title selector
const rrTitleSelector = ".mn-rr__title";

// Required: RichRelevance slick carousel selector. Products will be added to this.
const rrCarouselSelector = ".owl-carousel";

// Required: HTML template for carousel item (product). Set your HTML here, and insert any of the following product values within the HTML:
// {brand}          : The product's brand name, e.g. "Capsule"
// {colour_images}  : The product's available colours - comma-separated, and within each separation, pipe-separated between the colour and its associated image URL, e.g. "Brown|https://productimages.drct2u.com/huge/products/is/is065/r01is065731w.jpg,Natural|https://productimages.drct2u.com/huge/products/is/is065/r01is065731w.jpg,Yellow|https://productimages.drct2u.com/huge/products/is/is065/r01is065731w.jpg"
// {image}          : The product's main image URL, e.g. "https://productimages.drct2u.com/huge/products/xf/xf282/r01xf282706w.jpg"
// {itemId}         : The product's ID, e.g. "XF282"
// {itemIndex}      : The product's index number within the placement, e.g "3"
// {name}           : The product's name, e.g. "Animal Print Swing Dress"
// {numReviews}     : The product's number of customer reviews , e.g. "3"
// {price}          : The product's normal price, e.g. "16.00"
// {rating}         : The product's rating image URL, e.g. "http://reviews.domain.com/1336/5.0/5/rating.gif"
// {salePrice}      : The product's sale price, e.g. "16.00"
// {url}            : The product's URL via RichRelevance tracking, e.g. "http://integration.richrelevance.com/rrserver/click?a=8278bb13e49dd840&vg=020eac23-3366-452f-eccd-fe5b647c2848&pti=9&pa=rr1&hpi=3640&stn=AdvancedMerchandisingStrategy&stid=300&rti=2&sgs=&mvtId=-1&mvtTs=1570112857163&uguid=3301172b-0584-42a4-b096-f35b6304e2e0&channelId=WEB&s=1904498017&pg=1749&amrId=39458&p=XF282&ind=3&ct=https%3A%2F%2Fwww.jdwilliams.co.uk%2Fshop%2FAnimal-Print-Swing-Dress%2FXF282%2Fproduct%2Fdetails%2Fshow.action%3FpdBoUid%3D1021%23colour%3A%2Csize%3A"
const rrProductHtml =
    "\r\n\
  <div class='product-item'>\r\n\
    <a href='{url}'>\r\n\
      <img alt='{name}' class='product-image' src='{image}'>\r\n\
      <p class='product-title'>{name}</p>\r\n\
      <p class='product-price'>Â£{price}</p>\r\n\
    </a>\r\n\
  </div>\r\n";

// Optional: RichRelevance product seed codes. Multiple product codes should be comma-separated, e.g. "ABC123, DEF456, GHI789". Product seed codes are omitted from RichRelevance results, but are used as seeds to obtain other products. Leave blank if not required.
const rrProductSeedCodes = "";

// Optional: RichRelevance title text override. If empty, title is taken from the RichRelevance placement's "message" object key.
const rrTitleOverride = "";

// Optional: slick carousel options
//$(".owl-carousel").owlCarousel({ items: 3, nav: true, dots: false, loop: true, autoplay: false, responsive: { 320: { items: 1 }, 375: { items: 1 }, 414: { items: 1 }, 568: { items: 2 }, 667: { items: 2 }, 736: { items: 2 }, 768: { items: 3 }, 1024: { items: 5 } } }) })() }) })();
const rrCarouselOptions = {
    items: 3,
    nav: true,
    dots: false,
    loop: true,
    autoplay: false,
    responsive: {
        320: {
            items: 1,
        },
        375: {
            items: 1,
        },
        414: {
            items: 1,
        },
        568: {
            items: 2,
        },
        667: {
            items: 2,
        },
        736: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 5,
        },
    },
};

/*********************************************
 *** NO NEED TO CONFIGURE BEYOND THIS POINT ***
 **********************************************/

// Returns the value of a key path array (p) within an object (o)
const getObjectValue = (p, o) =>
    p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o);

// Convert comma-separated RichRelevance product seed codes to array
const rrProductSeedCodesArr = rrProductSeedCodes
    .split(",")
    .map(function (item) {
        return item.trim();
    });

// Execute RichRelevance initialiser, which checks for existence of our RichRelevance HTML wrapper until it is found
// This interval checker is in case the Monetate HTML takes a little while to load in after the Monetate JavaScript has loaded
const rrInitInterval = window.setInterval(rrInit, 1);

// If our RichRelevance HTML wrapper cannot be located after five seconds, stop searching
window.setTimeout(function () {
    window.clearInterval(rrInitInterval);
}, 5000);

// Returns the user's device type
function getDeviceType() {
    let deviceType = null;
    if (typeof tagDataLayer === "object") {
        deviceType = getObjectValue(["DeviceType"], tagDataLayer);
    }
    switch (deviceType) {
        case "Smartphone":
            return "mobile";
            break;
        case "Tablet":
            return "tablet";
            break;
        case "Desktop":
            return "desktop";
            break;
        default:
            return "unknown";
            break;
    }
}

// Returns the RichRelevance-formatted session ID based on the website session ID
function getSessionId() {
    let webSessionId = null,
        webSessionIdSplit = null,
        rrSessionId = null;
    if (typeof tagDataLayer === "object") {
        webSessionId = getObjectValue(["WebSessionID"], tagDataLayer);
        if (webSessionId) {
            webSessionIdSplit = webSessionId.split("_");
            if (typeof webSessionIdSplit[2] !== "undefined") {
                rrSessionId = webSessionIdSplit[2];
            }
        }
    }
    return rrSessionId;
}

// Returns the website user ID of a logged-in user
function getUserId() {
    let userId = "";
    if (typeof tagDataLayer === "object") {
        userId = getObjectValue(["AccountDetails", "accountRef"], tagDataLayer);
    }
    return userId;
}

// Appends a <script> element to the <head> element, and executes an optional callback function thereafter
function externalJS(src, callback) {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onreadystatechange = s.onload = function () {
        const state = s.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
    document.getElementsByTagName("head")[0].appendChild(s);
}

// Appends a stylesheet <link> element to the <head> element
function injectCSS(cssLink) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssLink;
    document.getElementsByTagName("head")[0].appendChild(link);
}

// Initialise the RichRelevance JavaScript library, and ensure essentional HTML elements exist before processing RichRelevance placement and carousel
function rrInit() {
    // Carousel element for the RichRelevance products to be inserted into
    const carouselHtmlElement = document.querySelector(rrCarouselSelector);

    // Only run RichRelevance API request if the carousel element exists
    if (carouselHtmlElement) {
        // Stop checking if Monetate HTML has loaded; it has loaded if the elements exist
        window.clearInterval(rrInitInterval);

        if (typeof itemObjArray !== "undefined") {
            itemObjArray = undefined;
        }

        if (typeof r3 === "function") {
            rrProcessor();
        } else {
            externalJS(
                "https://media.richrelevance.com/rrserver/js/1.2/p13n.js",
                function () {
                    rrProcessor();
                }
            );
        }
    }
}

// Process RichRelevance API call
function rrProcessor() {
    // RichRelevance subdomain environment - live and staging, respectively
    const env = rrIsLive ? "recs" : "integration";

    // User's device type - for appending to API key to determine RichRelevance channel name
    const deviceType = getDeviceType();

    // RichRelevance API key, obtianed from RR_apiKey global variable
    const rrApiKey =
        typeof RR_apiKey !== "undefined" ? RR_apiKey : "3a007e15fc318633";

    // RichRelevance channel name - derived from API key and user's device type
    const rrChannel = rrApiKey + "-" + deviceType;

    // User's session ID - take from website session ID and converted to RichRelevance format
    const sessionId = getSessionId();

    // User's account ID - for logged-in users-only
    const userId = getUserId();

    // Run RichRelevance callback to process JSON placement object
    const rrCallback = function () {
        const jsonPlacementInterval = window.setInterval(function () {
            // Initialise HTML elements for RichRelevance
            let rrWrapperElement;
            let rrTitleElement;
            let jqueryCarouselElement;

            // Check that jsonPlacement is an object with at least 1 placement returned
            if (typeof jsonPlacement === "object" && jsonPlacement.length) {
                // Determine if placement object has the placement name that we requested
                const rrPlacementObj = jsonPlacement.find(function (
                    jsonPlacementItem
                ) {
                    if (
                        typeof jsonPlacementItem === "object" &&
                        jsonPlacementItem.hasOwnProperty("placement_name") &&
                        jsonPlacementItem["placement_name"] === rrPlacementName
                    ) {
                        window.clearInterval(jsonPlacementInterval);
                        return jsonPlacementItem;
                    } else {
                        return;
                    }
                });

                // If placement with correct name is an object and has items, process it into the carousel
                if (
                    typeof rrPlacementObj === "object" &&
                    rrPlacementObj.hasOwnProperty("items")
                ) {
                    // Declare HTML elements for RichRelevance
                    rrWrapperElement = document.querySelector(
                        rrWrapperSelector
                    );
                    rrTitleElement = document.querySelector(rrTitleSelector);
                    jqueryCarouselElement = $(rrCarouselSelector);

                    // Set the carousel title. Use title override, if set, or use the placement's "message" object key.
                    if (rrTitleElement) {
                        if (rrTitleOverride.length) {
                            rrTitleElement.innerHTML = rrTitleOverride;
                        } else if (
                            rrPlacementObj.hasOwnProperty("message") &&
                            rrPlacementObj.message.length
                        ) {
                            rrTitleElement.innerHTML = rrPlacementObj.message;
                        }
                    }

                    // Check for presence of jsonPlacement object and RichRelevance HTML elements, and set up the carousel
                    if (rrWrapperElement && jqueryCarouselElement.length) {
                        // Remove empty carousel's spatial character (inesrted by Monetate)
                        //jqueryCarouselElement.html("");

                        // Show slick carousel after initialisation
                        jqueryCarouselElement.on(
                            "initialized.owl.carousel",
                            function () {
                                rrWrapperElement.style.display = "block";
                            }
                        );

                        // Initialise slick carousel with specified options
                        jqueryCarouselElement.owlCarousel(rrCarouselOptions);

                        // Add each RichRelevance item to the carousel
                        rrPlacementObj.items.forEach(function (item) {
                            // Initialise item's HTML template as the originally-specified HTML template
                            let itemHtml = rrProductHtml;

                            // Replace HTML key names with the corresponding object key values from RichRelevance placement
                            itemHtml = itemHtml
                                .split("{brand}")
                                .join(item.brand);
                            itemHtml = itemHtml
                                .split("{colour_images}")
                                .join(item.colour_images);
                            itemHtml = itemHtml
                                .split("{image}")
                                .join(item.image);
                            itemHtml = itemHtml
                                .split("{itemId}")
                                .join(item.itemId);
                            itemHtml = itemHtml
                                .split("{itemIndex}")
                                .join(item.itemIndex);
                            itemHtml = itemHtml.split("{name}").join(item.name);
                            itemHtml = itemHtml
                                .split("{numReviews}")
                                .join(item.numReviews);
                            itemHtml = itemHtml
                                .split("{price}")
                                .join(item.price);
                            itemHtml = itemHtml
                                .split("{rating}")
                                .join(item.rating);
                            itemHtml = itemHtml
                                .split("{salePrice}")
                                .join(item.salePrice);
                            itemHtml = itemHtml.split("{url}").join(item.url);

                            // Append item HTML to cumulative carousel HTML
                            jqueryCarouselElement.trigger(
                                "add.owl.carousel",
                                itemHtml
                            );
                        });

                        // Refresh the carousel
                        jqueryCarouselElement.trigger("refresh.owl.carousel");
                    }
                }
            }
        }, 1);

        window.setTimeout(function () {
            window.clearInterval(jsonPlacementInterval);
        }, 5000);
    };

    rrCallback();

    try {
        processAffinities(itemObjArray);
    } catch (e) {}

    if (typeof R3_COMMON === "undefined") {
        var R3_COMMON = new r3_common();
    } else {
        R3_COMMON = new r3_common();
    }

    // Add essential properties to the API request
    R3_COMMON.setApiKey(rrApiKey);
    R3_COMMON.setChannel(rrChannel);
    R3_COMMON.setBaseUrl("https://" + env + ".richrelevance.com/rrserver/");
    R3_COMMON.setClickthruServer("https://" + window.location.host);
    R3_COMMON.setSessionId(sessionId);

    // If userId is set (visitor is signed in), set userId property on API request
    if (userId) {
        R3_COMMON.setUserId(userId);
    }

    // Add placement name to the API request
    R3_COMMON.addPlacementType("category_page.GiftsForKids");

    // Set page brand name to the API request
    // R3_COMMON.setPageBrand(rrPageBrand);
    var R3_CATEGORY = new r3_category();
    R3_CATEGORY.setId("1651818361");
    R3_CATEGORY.setName("Gifts");
    // if (typeof R3_BRAND === "undefined") {
    //     var R3_BRAND = new r3_brand();
    // } else {
    //     R3_BRAND = new r3_brand();
    // }

    rr_flush_onload();
    r3();
}
