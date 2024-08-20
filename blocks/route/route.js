// eslint-disable-next-line import/no-unresolved,import/extensions
import { h, Component, Fragment, render } from '../../scripts/preact.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import htm from '../../scripts/htm.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import { LocationProvider, Router, Route } from '../../scripts/router.js';

const html = htm.bind(h);

class Products extends Component {
render() {
    return html`
        <${Fragment}>
        <div class="route-comp">
            <h3>This is a Route Component for Products Page</h3>
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
            <${Products} path="/products" />
            <${Route} path="/product" component=${ProductHome} />
        <//>
    <//>
  `;
}

export default async function decorate(block) {
    const rtApp = html`<${App}/>`;
    render(rtApp, block);
    //const rt = html`<${Products} />`;
    //render(rt, block);
  }