import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';





const Product = (props) => {
    console.log(props.product);
    const {name,img,stock,seller,price,key} = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt=""/>
            </div>
            <div className='product-text'>
                <h2><Link to={"/product/"+key}>{name}</Link></h2>
                <p><small>by :{seller}</small></p>
                <p>$ {price}</p>
                <p>Only {stock} left in stock . order now</p>
                <button onClick={()=>props.handleClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Order Now </button>
            </div>
            
        </div>
    );
};

export default Product;