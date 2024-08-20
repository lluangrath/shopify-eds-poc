import { render } from '../../scripts/preact.js';
import { App, html } from '../../shopify/index.js';

export default async function decorate(block) {
    const rtApp = html`<${App}/>`;
    render(rtApp, block);
  }