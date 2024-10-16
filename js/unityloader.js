function loadUnityGame(containerId) {
    var buildUrl = "/unity/Build";
    var loaderUrl = buildUrl + "/Build.loader.js";
    var config = {
        dataUrl: buildUrl + "/Build.data",
        frameworkUrl: buildUrl + "/Build.framework.js",
        codeUrl: buildUrl + "/Build.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "YourCompany",
        productName: "YourProduct",
        productVersion: "1.0",
    };

    var container = document.getElementById(containerId);
    var canvas = document.createElement("canvas");
    container.appendChild(canvas);

    createUnityInstance(canvas, config, (progress) => {
        console.log(`Loading: ${progress * 100}%`);
    }).then((unityInstance) => {
        console.log("Unity instance loaded.");
    }).catch((message) => {
        console.error(message);
    });
}
