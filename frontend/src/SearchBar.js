import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

const SearchBar = (props) => {


    

return (
<div className="header-bottom-furniture wrapper-padding-2 border-top-3">
<div className="container-fluid">
    <div className="furniture-bottom-wrapper">
        <div className="furniture-login">
            <ul>
                <li>Get Access: <a onClick={props.openLoginModal} href="#">Login</a></li>
                <li><a onClick={props.openRegisterModal} href="#">Reg </a></li>
            </ul>
        </div>
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
                <li><a data-toggle="modal" data-target="#exampleCompare" href="#"><i className="ti-reload"></i> Compare</a></li>
                <li><a href="wishlist.html"><i className="ti-heart"></i> Wishlist</a></li>
            </ul>
        </div>
    </div>
</div>
</div>


)}



export default (SearchBar);


