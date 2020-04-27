import React from 'react';
function Sidebar() {
    return ( 
        // <!-- Start of Sidebar -->
                            <div id="left_column">


{/* <!-- Categories - Side (Only display if there are further subcategories)--> */}


                                <div id="categories_block_left" className="block">
                                    <h2 className="title_block">Categories</h2>
                                    <div>
                                        <ul>
                                            <li> <span className="grower OPEN"> </span><a href="link"> Category 1 </a>
                                                <ul>
                                                    <li> <a href="link"> Category 1.1</a></li>
                                                    <li> <a href="link"> Category 1.2 </a></li>
                                                </ul>
                                            </li>
                                            <li> <span className="grower CLOSE"> </span><a href="link"> Category 2 </a>
                                                <ul >
                                                    <li> <a href=""> Category 2.1 </a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>



{/* // <!-- Categories - Side --> */}





{/* // <!-- product filter form side --> */}
<div id="layered_block_left" className="block">
    <p className="title_block">Filters</p>
    <div className="block_content" >
            <div>

                <div className="layered_filter"> <span className="layered_subtitle">Filters</span>
                    <ul>
                        <li><a href="link">Filter 1</a></li>
                        <li><a href="link">Filter 2</a></li>
                        <li><a href="link">Filter 3</a></li>
                    </ul>
                </div>
                <div className="layered_filter"> <span className="layered_subtitle">Diets</span>
                    <ul>
                        <li><a href="link">Diet 1</a></li>
                        <li><a href="link">Diet 2</a></li>
                        <li><a href="link">Diet 3</a></li>
                    </ul>
                </div>

                <div id="enabled_filters"> <span className="layered_subtitle"> Enabled filters: </span>
                    <ul>
                        <li> <a href="#"><i className="icon-remove"></i></a> Active Filter 1 </li>
                        <li> <a href="#"><i className="icon-remove"></i></a> Active Filter 2</li>
                    </ul>
                </div>



            </div>
    </div>
</div>
{/* // <!-- product filter form side --> */}













{/* // <!-- Specials Sidebar --> */}
                                <div className="block">
                                    <p className="title_block">Special Offers</p>
                                    <div className="block_content products-block" >
                                        <ul>
                                            <li className="clearfix">
                                                <a className="products-block-image" href="http://prestashop.templatemela.com/PRS05/PRS050107/index.php?id_product=5&amp;controller=product&amp;id_lang=1"> <img className="replace-2x img-responsive" src="http://prestashop.templatemela.com/PRS05/PRS050107/img/p/9/8/98-small_default.jpg" alt="Arcu vitae imperdiet facilisis" title="Arcu vitae imperdiet facilisis"/> </a>
                                                <div className="product-content">
                                                    <h5> <a className="product-name" href="http://prestashop.templatemela.com/PRS05/PRS050107/index.php?id_product=5&amp;controller=product&amp;id_lang=1" title="Arcu vitae imperdiet facilisis"> Arcu vitae imperdiet facilisis </a></h5>
                                                    <p className="product-description"> Lorem ipsum dolor sit amet,...</p>
                                                    <div className="price-box"> <span className="price special-price"> $65.55 </span> <span className="price-percent-reduction">-5%</span> <span className="old-price"> $69.00 </span></div>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>
                                </div>

{/* <!-- Specials Sidebar --> */}

















{/* <!-- Brands Sidebar --> */}
                                <div id="manufacturers_block_left" className="block blockmanufacturer">
                                    <p class="title_block">Brands</p>
                                    <div class="block_content list-block">
                                        <ul>
                                            <li class="item"> <a href="link"> Whatever 1 </a></li>
                                            <li class="item"> <a href="link"> Whatever 2 </a></li>
                                        </ul>
                                    </div>
                                </div>
{/* <!-- Brands Sidebar --> */}

                            </div>
// <!-- End of Sidebar --></div>


    )}

    export default Sidebar