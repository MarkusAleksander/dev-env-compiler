export default function loadExternalJS(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onreadystatechange = script.onload = () => {
        let state = script.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
}
