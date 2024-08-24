import { loadScript, loadCSS } from "../../scripts/aem";

export default async function decorate(block) {  
  const appDiv = document.createElement("div");
  appDiv.id = "app";
  loadCSS('/shopify-preact/dist-aem/assets/index.css');
  loadScript('/shopify-preact/dist-aem/assets/index.js');
  block.textContent = '';
  block.append(appDiv);
}