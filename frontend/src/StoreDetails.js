import React, {  useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";




const StoreDetails = (props) => {
    const [store, setStore] = useState({ categories: [] });
    useEffect(() => {
        fetch(`http://localhost:3000/stores/${props.match.params.id}/mainCategories`)
          .then(res => res.json())
          .then(categories => {
            setStore({categories:categories})
          })
      },[props.match.params.id])



    return(
        <div>
         {store.categories.map((category)=> <p><Link to={`/stores/${props.match.params.id}/categories/${category.id}`}>{category.name}</Link></p>)}
        </div>
    )
}


export default StoreDetails;