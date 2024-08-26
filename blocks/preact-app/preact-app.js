import { loadScript, loadCSS } from "../../scripts/aem.js";

export default async function decorate(block) {
  loadScript('/shopify-preact/dist-aem/assets/index.js');
  
  const appDiv = document.createElement("div");
  appDiv.id = "app";
  appDiv.attributes.append("productCategory", "snowboard");

  block.textContent = '';
  block.append(appDiv);
}