
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import React, {  useState, useEffect } from 'react';
import Product from './Product'


import Slider from "react-slick";
import { Container } from 'react-bootstrap';


const StoreCategory = (props) => {
/* 
   const [category, setCategory] = useState({ offers: [], categories:[] });

    useEffect(() => {
        fetch(`http://localhost:3000/stores/${props.match.params.id}/categories/${props.match.params.categoryId}`)
          .then(res => res.json())
          .then(category => {
           setCategory(category)
          })
      },[props.match.params.categoryId,props.match.params.id])
    */


const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };


    return (
      <Container width="50%">

<br/>

<br/>

        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>

<br/>

<br/>

<br/>
      </Container>

)


}





export default StoreCategory;
