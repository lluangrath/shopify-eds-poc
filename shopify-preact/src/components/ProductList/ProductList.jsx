import { Component, Fragment } from 'preact'
import './ProductList.css'

/* Constants */
const PUBLIC_STOREFRONT_API_TOKEN = '0f3a32c356f27e7ab24a28674bc60492';
const PUBLIC_STORE_DOMAIN = 'slalom-aem.myshopify.com';
const GRAPHQL_ENDPOINT = `https://${PUBLIC_STORE_DOMAIN}/api/2024-07/graphql.json`;

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
                    variants(first:1) {
                        edges {
                            node {
                                price {
                                    amount
                                }
                            }
                        }
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
    console.log('products',products);
    return products;
};

const getShopifyId = (textId) => {
    return "/store/product/" + textId.replace('gid://shopify/Product/','')
}


export default class ProductList extends Component {

    constructor() {
        super();
        this.state = {products:[]};
    }

    async componentDidMount() {
        await shopifyRequest().then(products => this.setState({products}));
    }
     
    render() {
        const pList = this.state.products.map((product,i) => (
            <div class="product-card">
              <div class="badge">Hot</div>
                <div class="product-thumb">
                    <img src={product.node.featuredImage.url} alt="" />
                </div>
                <div class="product-details">
                    <span class="product-category">Snowboards</span>
                    <h5><a href={getShopifyId(product.node.id)}>{product.node.title}</a></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                    <div class="product-bottom-details">
                    <div class="product-price">${product.node.variants.edges[0].node.price.amount}</div>
                    <div class="product-links">
                        <a href=""><i class="fa fa-heart"></i></a>
                        <a href=""><i class="fa fa-shopping-cart"></i></a>
                    </div>
                    </div>
                </div>
            
            </div>
            
        ));

        return (
            <Fragment>
            <div class="route-comp">
                <h1>Snowboards</h1>
                <div class="cards">
                    <div class="product-list">
                    {pList}
                    </div>
                </div>
            </div>
            </Fragment>
        )
    };
    
};