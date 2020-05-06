import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

const SearchBar = (props) => {


    // class="header-bottom-furniture wrapper-padding-2 border-top-3"   

return (
<div className="header-bottom-furniture wrapper-padding-2 border-top-3" >
<div style={{"position":"relative"}} className="container-fluid">
    <div className="furniture-bottom-wrapper">
                           
                           
       
        <div className="furniture-search">
            <form onSubmit={(e)=>props.searchOffers(e)} >
                <input placeholder="I am Searching for . . ." type="text"/>
                <button>
                    <i className="ti-search"></i>
                </button>
            </form>
        </div>
        <div className="furniture-wishlist">
            <ul>
                <li><a data-toggle="modal" data-target="#exampleCompare" href="#" onClick={() => props.openSearchModal(props.store_id)}><i className="ti-eye"></i> Scanner</a></li>
                <li><a href="/wishlist"><i className="ti-heart"></i> Wishlist</a></li>
            </ul>
        </div>
    </div>
</div>
</div>


)}






const mapStateToProps = state => {
    return {
       user: state.user
    };
 };
 
 const mapDispatchToProps = dispatch => {
    return {
       openSearchModal: ((store) => dispatch({type: 'OPEN_SEARCH_MODAL' , store: store})),
       closeSearchModal: (() => dispatch({type: 'CLOSE_SEARCH_MODAL'}))
    };
 };
 
 export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
