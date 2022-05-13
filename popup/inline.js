navigator.serviceWorker.ready.then((registration) => {
  navigator.serviceWorker.controller.postMessage({
    message: "inline > serviceworker",
  });

  navigator.serviceWorker.onmessage = (event) => {
    console.log(`inline.js received: "${event.data.message}"`);
  };
});
