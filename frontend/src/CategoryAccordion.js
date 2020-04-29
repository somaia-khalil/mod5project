import React, {  useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


import { Accordion } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


import CategorySlider from './CategorySlider';







const CategoryAccordion = (props) => {

    return(

<Accordion>
 {props.categories.map(category => 
  <Card key ={category.id}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey={category.id}>
        {category.name}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={category.id}>
      <Card.Body >

         { category.categories && category.categories.length > 0 ? <CategoryAccordion store={props.store} categories={category.categories}  /> : <CategorySlider store={props.store} category={category}/>}

     </Card.Body>
    </Accordion.Collapse>
  </Card>
)}

</Accordion>

    )
}


export default CategoryAccordion;
