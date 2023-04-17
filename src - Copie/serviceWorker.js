import { Workbox } from "workbox-window";

const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("/sw.js");
    wb.register();
  }
};

export default registerServiceWorker;
