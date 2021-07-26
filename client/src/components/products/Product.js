import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from "react-redux";
import {addToTotal, substractToTotal, saveProduct, deleteProduct, getProducts, eraseProduct } from '../../actions/products'
import {ProductBox, ButtonBox, Button, CounterBox, Counter, TextBox, InfoBox, ImgBox, Price, Text, Center, AdminButton } from './ProductStyles'
import {getPurchaseLocalStorage, getTokenLocalStorage} from '../../reducer/reducer'
import { isAdmin } from '../../actions/users';
import axios from 'axios';
import swal from "sweetalert";

const Product = (props) => {
    const dispatch = useDispatch();
    const[state, setState] = useState({
        counter: getPurchaseLocalStorage().extras.hasOwnProperty(props.name) ? getPurchaseLocalStorage().extras[props.name] : 0,
    })

    const [admin, setAdmin] = useState(null);
    const [pricing, setPricing] = useState({name: props.name, show: false,
    price: props.price});
    
    useEffect(() => {
        async function verify () {
            const autho = await isAdmin();
            setAdmin(autho);
        };

        verify();
    }, [admin]);

    const handleSubtract = function(e){
        e.preventDefault()
        props.getProducts()
        if (state.counter > 0){
            setState({
                ...state,
                counter: state.counter-1,
                totalPrice: state.totalPrice - props.price
            })
            props.substractToTotal(props.price)
            props.deleteProduct(props.name)
        }
    }
    const handleAdd = function(e){
        e.preventDefault(e)
        props.getProducts()
        if (state.counter < 9){
            setState({
                ...state,
                counter: state.counter+1,                
            })
            props.addToTotal(props.price)
            props.saveProduct(props.name)
        }
    }

    function handleEdit (e) {
        e.preventDefault();
        setPricing({...pricing, show: true});
    }

    const config = {
        headers: {
          "Access-Control-Allow-Headers": "x-access-token",
          "x-access-token": getTokenLocalStorage(),
        },
      };

    async function handleClick (e) {
        e.preventDefault();
        let prod = {name: pricing.name, price: pricing.price}

        await axios.put('http://localhost:3001/products', prod, config);

        setPricing({...pricing, show: false});

        dispatch(getProducts());
    }

    function handleChange (e) {
        e.preventDefault();
        setPricing({...pricing, price: e.target.value});
    }

    function handleCancel (e) {
        e.preventDefault();
        setPricing({...pricing, show: false});
    }

    async function handleErase (e) {
        e.preventDefault();
        const option = await swal({
            text: "Are you sure you want to delete this product?",
            buttons: true
          })
          if (option) {
            props.eraseProduct(props.name)
            await swal("Deleting product...", {
              icon: "success",
              buttons: false,
              timer: 1500,
            });
            dispatch(getProducts());
          }
    }

    return(
        <ProductBox>
            <div>
            <InfoBox>
                {admin ? <button className="deleteBtn" onClick={e => handleErase(e)}>X</button> : null}
                <div id="ctn">
                <ImgBox>
                    <img src={props.imgUrl} height='150px' width='160px' alt=''/>
                </ImgBox>
                <TextBox>
                    <Text><p>{props.name}</p></Text>
                    <Text><Price>${props.price}</Price>{admin ? <AdminButton onClick={(e) => handleEdit(e)}>Edit</AdminButton> : null}</Text>
                    {pricing.show ? <div id="cnt"><input id="inp" type="number" value={pricing.newPricing} onChange={(e) => handleChange(e)} placeholder="New price..." min="1" /><AdminButton className="btn" onClick={(e) => handleClick(e)}>Confirm</AdminButton><AdminButton className="btn" onClick={(e) => handleCancel(e)}>Cancel</AdminButton></div> : null}
                </TextBox>
                </div>
            </InfoBox>
                <Center>
                    <ButtonBox>
                        <Button onClick={event => handleSubtract(event)}>-</Button>
                        <CounterBox><Counter>{state.counter}</Counter></CounterBox>
                        <Button onClick={event => handleAdd(event)}>+</Button>
                    </ButtonBox>
                </Center>
            </div>
        </ProductBox>
    )
}



function mapStateToProps(state) {
    return {
        counter: state.purchase.extras
    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
        eraseProduct: name => eraseProduct(name),
        getProducts: () => dispatch(getProducts()),
        addToTotal: price => dispatch(addToTotal(price)),
        substractToTotal: price => dispatch(substractToTotal(price)),
        saveProduct: product => dispatch(saveProduct(product)),
        deleteProduct: product => dispatch(deleteProduct(product)),
    };
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product);