import { h, Component, Fragment, render } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

export class ProductList extends Component {

    constructor(products) {
        super();
        console.log(products);
    }
    render() {
        return html`
        <${Fragment}>
            <div class="product-card">
            </div>
        <//>`
    }
}
