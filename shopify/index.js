import { h, Component, Fragment, render } from '../scripts/preact.js';
import { LocationProvider, Route, Router } from '../scripts/router.js';
import htm from '../scripts/htm.js';
import { Product } from './product/product.js';
import { ProductList } from './product-list/product-list.js';

/* Constants */
export const PUBLIC_STOREFRONT_API_TOKEN = '0f3a32c356f27e7ab24a28674bc60492';
export const PUBLIC_STORE_DOMAIN = 'slalom-aem.myshopify.com';
export const GRAPHQL_ENDPOINT = 'https://slalom-aem.myshopify.com/api/2024-07/graphql.json';
export const html = htm.bind(h);

export class ProductHome extends Component {
async componentDidMount() {
    const products = await shopifyRequest();
    this.setState({
        products,
    });
}

render() {
    return html`
        <${Fragment}>
        <div class="route-comp">
            <h3>Product Home</h3>
            <${ProductList} products=${this.state.products}>
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

const shopifyRequest = async () => {
    const query = `{
        products(first: 10) {
            edges {
                node {
                    id
                    title
                    description
                    featuredImage {
                        url
                    }
                }
            }
        }
    }`;

    const response = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': PUBLIC_STOREFRONT_API_TOKEN,
        },
        body: JSON.stringify({
        query: query.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ').replace(/\s\s+/g, ' '),
        }),
    });

    if (!response.ok) {
        return null;
    }

    const result = await response.json();
    const products = result.data?.products?.edges;

    return products;
}; 