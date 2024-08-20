import { render } from '../../scripts/preact.js';
import { App } from '../../shopify/index.js';

export default async function decorate(block) {
    const rtApp = html`<${App}/>`;
    render(rtApp, block);
  }