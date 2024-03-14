const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  window.promptEvent = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.promptEvent;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  const { outcome } = await promptEvent.userChoice;
  if (outcome === "accepted") {
    console.log("User accepted the A2HS prompt");
  } else {
    console.log("User dismissed the A2HS prompt");
  }
  window.promptEvent = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  window.promptEvent = null;
  console.log("app installed");
});
