import { h, Component, Fragment, render } from '../../scripts/preact.js';
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
