import React, {  useState, useEffect } from 'react';
import { Link } from "react-router-dom";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CategoryAccordion from './CategoryAccordion';


import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Slider from "react-slick";
import { Container } from 'react-bootstrap';


import OfferCard from './OfferCard';
import Bread from './Bread'


import { CardColumns } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';

import CategoryDetails from './CategoryDetails';
import OfferCards from './OfferCards';






const CategoryCards = (props) => {

    return (
    <div>
       
        <div className="blog-area pt-130 pb-70">
            <div className="container">
                <div className="section-title-furits text-center mb-95">
                    <img src="/assets/img/icon-img/49.png" alt=""/>
                    <h2>Categories</h2>
                </div>
                <div className="row">
                    { props.categories.map( category => <CategoryCard store_id={props.store_id} category={category}/> ) }
                </div>
            </div>
        </div>
    </div>
)


}


export default CategoryCards;
