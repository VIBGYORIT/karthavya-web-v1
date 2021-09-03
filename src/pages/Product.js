import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import '../css/product/Product.css';
class Product extends React.Component {
    render() {
        return (
            <div>
                 <h1>KARTHAVYA (V 0.1)</h1>
                <center>
                    <br></br>
                <Carousel autoPlay interval="1000" transitionTime="1000" width="400px" height="400px">
                    <div>
                        <img src="https://dummyimage.com/400x400/000/fff"/>
                    </div>
                    <div>
                        <img src="https://dummyimage.com/400x400/000/fff" />
                    </div>
                    <div>
                        <img src="https://dummyimage.com/400x400/000/fff" />
                    </div>
                </Carousel>
                <div>
                    <h1>Price</h1>
                    <br></br>
                    <button onClick={this.handleClick} class="buy">
                    Buy Now
                </button>
                </div>
                </center>
                <div>
                    <h3>BENEFITS</h3>
                <p>Accurate real-time face recognition and mask detection:</p>
               
                </div>
            </div>
            
        )
    };
}

export default Product;