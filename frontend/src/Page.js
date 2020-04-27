import React from 'react';
function Page() {
    return (

        <div id="center_column">


        {/* <!-- Display Category Path here --> */}
        <div className="breadcrumb clearfix"> <a className="home" href="/"><i className="icon-home"></i></a> <span className="navigation-pipe">&gt;</span> <span className="navigation_page">Category</span></div>


        {/* <!-- Category Heading and Title --> */}
        <h1 className="page-heading product-listing"><span className="cat-name">Category</span><span className="heading-counter">There are %Length products.</span></h1>




{/* <!-- Top Display Sub-Categories (Only display if there are further subcategories) --> */}
        <div id="subcategories">
            <p>Subcategories</p>
            <ul className="clearfix">

                <li>
                   <a href="link"><img src="http://prestashop.templatemela.com/PRS05/PRS050107/img/c/8-medium_default.jpg" width="90" height="90"/>
                   <h5>Subcategory 1</h5></a>
                </li>


                <li>
                   <a href="link"><img src="http://prestashop.templatemela.com/PRS05/PRS050107/img/c/8-medium_default.jpg" width="90" height="90"/>
                   <h5>Subcategory 2</h5></a>
                </li>

            </ul>
        </div>
{/* <!-- Top Display Sub-Categories END--> */}















{/* <!-- Sort Bar --> */}
        <div className="content_sortPagiBar clearfix">
            <div className="content_sortPagiBar sortPagiBar clearfix">
                <div className = "content_sortPagiBar_item" >
                        <label>Sort by</label>
                        <div className="selector"><span>option</span></div>
                </div>
            </div>
        </div>
{/* <!-- Sort Bar --> */}







{/* <!-- Produuct List --> */}
        <ul className="product_list row grid">




{/* <!-- Product Listing --> */}
<li className="col-xs-12 col-sm-6 col-md-4">
<div className="product-container">
<div>
<div className="product-image-container">
<a href="link"><img src="http://prestashop.templatemela.com/PRS05/PRS050107/img/p/6/9/69-home_default.jpg"width="220" height="200"/> </a>
</div>
</div>
<div className="right-block">
<h5> <a className="product-name" href="link"> Name </a></h5>
</div>
<div className="functional-buttons clearfix">
<div className="wishlist"> <a> Add to Wishlist </a></div>
</div>
<div className="content_price"> <span itemprop="price" className="price product-price"> $125.00 </span></div>
</div>
</li>
{/* <!-- Product Listing --> */}





{/* <!-- Product Listing marked (implement hover event) --> */}
<li className="col-xs-12 col-sm-6 col-md-4 hovered">
<div className="product-container">
<div>
<div className="product-image-container">
<a href="link"> <img src="http://prestashop.templatemela.com/PRS05/PRS050107/img/p/6/9/69-home_default.jpg" width="220" height="200"/> </a>
<a className="quick-view" href="link"> <span>Quick view</span> </a>
</div>
</div>
<div className="right-block">
<h5> <a className="product-name" href="link"> Name </a></h5>
<span className="availability"> <span className="available-now">In stock </span> </span>
</div>
<div className="functional-buttons clearfix">
<div className="wishlist"> <a> Add to Wishlist </a></div>
</div>
<div className="button-container">
<a className="button ajax_add_to_cart_button" href="link"> <span>Add to cart</span> </a>
</div>
</div>
</li>
{/* <!-- Product Listing --> */}








        </ul>
{/* <!-- Product Listing END --> */}











{/* <!-- Bottom Bar --> */}
        <div className="content_sortPagiBar">
            <div className="bottom-pagination-content clearfix">

                <div id="pagination_bottom" className="pagination clearfix">
                    <ul className="pagination">
                        <li id="pagination_previous_bottom"> <span> <i className="icon-chevron-left"></i> <b>Previous</b> </span></li>
                        <li><a href="link"> <span>1</span> </a></li>
                        <li><a href="link"> <span>2</span> </a></li>
                        <li className="active current"> <span> <span>3</span> </span></li>
                        <li><a href="link"> <span>4</span> </a></li>
                        <li><a href="link"> <span>5</span> </a></li>
                        <li id="pagination_next_bottom"> <a href="link"> <b>Next</b> <i className="icon-chevron-right"></i> </a>
                        </li>
                    </ul>
                </div>
                <span className="product-count"> Showing %Low - %High of %N items</span>
            </div>
        </div>
        </div>
     
// {/* <!-- Bottom Bar - Prev / Next Site --> */}

    )}
export default Page