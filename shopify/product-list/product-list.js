import { h, Component, Fragment, render } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

export class ProductList extends Component {

    constructor(shopifyProducts) {
        super();
        this.products = shopifyProducts;
    }

render() {
    return products.map(p=>(html`
        <div class="product-card">
            <div class="badge">Hot</div>
            <div class="product-thumb">
                <img src="https://i.imgur.com/xdbHo4E.png" alt="">
            </div>
            <div class="product-details">
                <span class="product-category">Women,bag</span>
                <h4><a href="">Women leather bag</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                <div class="product-bottom-details">
                <div class="product-price"><small>$96.00</small>$230.99</div>
                <div class="product-links">
                    <a href=""><i class="fa fa-heart"></i></a>
                    <a href=""><i class="fa fa-shopping-cart"></i></a>
                </div>
                </div>
            </div>
        </div>;`
        ))};
}
