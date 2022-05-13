// This file can be imported inside the service worker,
// which means all of its functions and variables will be accessible
// inside the service worker.
// The importation is done in the file `service-worker.js`.

if (typeof window === "undefined") {
  window = {
    ReactNativeWebView: {
      postMessage: (message) => {},
    },
  };
}

const sendMessage = (message) => {
  self.clients
    .matchAll({
      frameType: "top-level",
      includeUncontrolled: true,
      type: "window",
      visibilityState: "visible",
    })
    .then((clients) => {
      clients.forEach((client) => {
        client.postMessage(message);
      });
    });
};

self.addEventListener("message", (event) => {
  console.log(`serviceworker received: "${event.data.message}"`);

  sendMessage({ message: "serviceworker > inline" });
});
