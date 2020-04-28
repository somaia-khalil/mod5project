import React from 'react';
import { connect } from 'react-redux';
function Cart(props) {


    return (
        // {/* <!-- Cart Component Overlay (Display on hover) --> */}
    
        <div className="header_user_info">
        <a className="cart" href="link">Cart (%count)</a>
        

<div className="cart_block block exclusive" >
<div>
<div>
<dl>

{props.cart.map(offer => {return (
<dt>
<a href="link" className="cart-images"><img src={offer.product.tradeIdentifiers_image}/></a>
<div className="cart-info">
<div className="product-name">
<span className="quantity"> 2 x </span>
<span > {offer.product.name} </span>
</div>
<div className="product-atributes">
<span>Black, S</span>
</div>
<span className="price"> $ {offer.price} </span>
</div> 
<span className="remove_link"> <a className="cart_block_remove_link" href="remove_link">Remove</a></span>
</dt>
)})}



<dt>
<a href="link" className="cart-images"><img src="http://prestashop.templatemela.com/PRS05/PRS050107/img/p/9/0/90-cart_default.jpg"/></a>
<div className="cart-info">
<div className="product-name">
<span className="quantity"> 2 x </span>
<span > Product 2 </span>
</div>
<div className="product-atributes">
<span>Black, S</span>
</div>
<span className="price"> $152.46 </span>
</div> 
<span className="remove_link"> <a className="cart_block_remove_link" href="remove_link">Remove</a></span>
</dt>




</dl>
<div className="cart-prices">
<div className="cart-prices-line first-line"> <span className="price cart_block_shipping_cost cart_shipping_cost"> $2.00 </span> <span> Shipping </span></div>
<div className="cart-prices-line last-line"> <span className="price cart_block_total ajax_block_cart_total">$271.46</span> <span>Total</span></div>
</div>
<p className="cart-buttons">
<a id="button_order_cart" className="btn btn-default button button-small" href="checkout link"> <span> Check out<i class="icon-chevron-right right"></i> </span> </a>
</p>
</div>
</div>
</div>
{/* <!-- Cart Content--> */}


    </div>


     )}
     const mapStateToProps = state => {
        return {
          cart: state.cart
        };
      };
       
      
      
      
      
      export default connect(mapStateToProps)(Cart);