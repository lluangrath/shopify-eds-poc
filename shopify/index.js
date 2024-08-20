import { h, Component, Fragment, render } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

export default class ProductHome extends Component {
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