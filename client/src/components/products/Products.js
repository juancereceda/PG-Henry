import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { getProducts } from '../../actions/products'
import Product from './Product'

const Products = (props) => {

    useEffect(() => props.getProducts(), [])

    return(
        <div>

            <div> 
                <div>
                    <h3>Movie Title</h3>
                    <p>field</p>
                    <p>Time</p>
                    <p>Date</p>
                    <p>Price</p>
                </div>
                <div>Parking Lot</div>
            </div>

            <div>
                <div>
                    <p>Combos</p>
                </div>
                <div>
                    <p>Combos mapping</p>                    
                </div>                
            </div>

            <div>
                <div>
                    <p>Extras</p>
                </div>
                <div>
                    <p>Extras mapping</p>
                    {props.products && props.products.map(e => 
                    <Product name={e.name} price={e.price}/>
                    )}
                </div>                
            </div>

            <div>
                <p>* You can choose sweet or salty once you get there!</p>
                <div>
                    <p>Total: {props.total}</p>
                    <button>Buy</button>
                </div>
            </div>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        products: state.products,
        total: state.total
    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts()),
    };
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Products);