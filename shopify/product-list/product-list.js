import { h, Component, Fragment, render } from '../../scripts/preact.js';
import { useState } from '../../scripts/preact-hooks.js';
import htm from '../../scripts/htm.js';
import style from './product-list.css';

const html = htm.bind(h);

export class ProductList extends Component {

    constructor(products) {
        const [products, setProducts] = useState([]);
        this.products = products;
        super();
    }

render() {
    return html`
        <style>
        ${style}
        </style>`
        products.map(p=>(html`
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
