export default function loadExternalCSS(cssLink) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssLink;
    document.getElementsByTagName("head")[0].appendChild(link);
}
