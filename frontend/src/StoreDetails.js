import React, {  useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import CategoryAccordion from './CategoryAccordion';



const StoreDetails = (props) => {


    const [store, setStore] = useState({ categories: [] });
    useEffect(() => {
        fetch(`http://localhost:3000/stores/${props.match.params.id}/categories`)
          .then(res => res.json())
          .then(categories => {
            setStore({categories:categories})
          })
      },[props.match.params.id])



    return(

<CategoryAccordion store={props.match.params.id} categories={store.categories} />

)


}


export default StoreDetails;
