export default function getNestedProperty(
    obj,
    propertyPathString,
    returnIfNotFound
) {
    // * Split path string
    let properties = propertyPathString.split(".");

    // * Loop over object
    for (let i = 0; i < properties.length; i++) {
        let prop = properties[i];

        if (!obj || !obj.hasOwnProperty(prop)) {
            // * Return desired return
            return returnIfNotFound;
        }
        obj = obj[prop];
    }
    // * Return found item
    return obj;
}
