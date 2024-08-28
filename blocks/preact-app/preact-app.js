import { loadScript, getMetadata, loadCSS } from "../../scripts/aem.js";

export default async function decorate(block) {
  loadScript('/shopify-preact/dist-aem/assets/index.js');
  
  const appDiv = document.createElement("div");
  appDiv.id = "app";
  appDiv.aemProps = [...block.textContent.matchAll(/(?:\S{2,}\s?)+(?<!\n)/g)]; //First prop will always be App name

  block.textContent = "";
  block.append(appDiv);
}