import { loadScript, getMetadata, loadCSS } from "../../scripts/aem.js";

export default async function decorate(block) {
  loadScript('/shopify-preact/dist-aem/assets/index.js');
  
  const appDiv = document.createElement("div");
  appDiv.id = "app";

  block.routes = getMetadata("routes");
  block.append(appDiv);
}