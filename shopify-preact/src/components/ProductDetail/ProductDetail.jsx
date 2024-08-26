import './ProductDetail.css'

export default function ProductDetail() {

    return (
        <div class = "card-wrapper">
            <div class = "card">
                <div class = "product-imgs">
                    <div class = "img-display">
                        <div class = "img-showcase">
                        <img src = "https://cdn.shopify.com/s/files/1/0705/4989/7468/files/Main_c8ff0b5d-c712-429a-be00-b29bd55cbc9d.jpg?v=1723154672" alt = "shoe image" />
                        </div>
                    </div>
                </div>
                <div class = "product-content">
                    <h2 class = "product-title">The Hidden Snowboard</h2>
                    <a href = "#" class = "product-link">visit snow store</a>

                    <div class = "product-price">
                        <p class = "new-price">Price: <span>$249.00</span></p>
                    </div>
                    <div class = "product-detail">
                        <h2>about this item: </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                        <ul>
                        <li>Color: <span>Black/Orange/Pink</span></li>
                        <li>Available: <span>in stock</span></li>
                        <li>Category: <span>Snowboards</span></li>
                        <li>Shipping Area: <span>United States</span></li>
                        <li>Shipping Fee: <span>Free</span></li>
                        </ul>
                    </div>

                    <div class = "purchase-info">
                        <input type = "number" min = "0" value = "1" />
                        <button type = "button" class = "btn">
                        Add to Cart <i class = "fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )


}