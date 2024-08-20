import { h, Component, Fragment, render } from '../../scripts/preact.js';
import { LocationProvider, Router, Route } from '../../scripts/router.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

class Product extends Component {
render() {
    return html`
        <${Fragment}>
        <div class="route-comp">
            <h3>This is a Route Component for Product Detail Page</h3>
        </div>
        <//>
    `;
    }
}

class ProductHome extends Component {
render() {
    return html`
        <${Fragment}>
        <div class="route-comp">
            <h3>Product Home</h3>
        </div>
        <//>
    `;
    }
}

function App() {
  return html`
    <${LocationProvider}>
        <${Router}>
            <${Route} path="/storefront/product" component=${Product} />
            <${Route} path="/storefront" component=${ProductHome} />
        <//>
    <//>
  `;
}

export default async function decorate(block) {
    const rtApp = html`<${App}/>`;
    render(rtApp, block);
  }