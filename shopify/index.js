import { h, Component, Fragment, render } from '../../scripts/preact.js';
import { LocationProvider, Route, Router } from '../scripts/router.js';
import htm from '../../scripts/htm.js';
import { Product } from './product/product.js';

export const html = htm.bind(h);
export class ProductHome extends Component {
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

export function App() {
    return html`
      <${LocationProvider}>
          <${Router}>
              <${Route} path="/storefront/product" component=${Product} />
              <${Route} path="/storefront" component=${ProductHome} />
          <//>
      <//>
    `;
  }