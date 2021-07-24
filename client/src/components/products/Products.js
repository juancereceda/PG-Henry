import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProducts, postPayment } from "../../actions/products";
import Product from "./Product";
import swal from "sweetalert";
import Car from "./Car";
import { isAdmin } from '../../actions/users';
import {
  ProductsBox,
  Container,
  MovieData,
  MovieDetails,
  ParkingLot,
  RedText,
  BuyBox,
  BuyButton,
  Total,
  ParkingLine,
  StoredProducts,
  Screen,
  Reference,
  AddProduct
} from "./ProductsStyles";
import {
  getPurchaseLocalStorage,
  getTokenLocalStorage,
} from "../../reducer/reducer";
import Footer from "../footer/Footer";
import axios from 'axios'

const Products = (props) => {
  const { getProducts } = props;
  const purchaseStore = getPurchaseLocalStorage();
  const token = getTokenLocalStorage();
  const [admin, setAdmin] = useState(null);
  const [showForm, setShowForm] = useState({
    extra: false,
    combo:false
  })
  const [state, setState] = useState({
    name: '', 
    category: '',
    price: '',
    stock:1000,
    imgUrl: '',
    combo: false
  })
  const config = {
    headers: {
      "Access-Control-Allow-Headers": "x-access-token",
      "x-access-token": getTokenLocalStorage(),
    },
  };
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    async function verify () {
        const autho = await isAdmin();
        setAdmin(autho);
    };

    verify();
}, [admin]);

  const handleBuy = async (e) => {
    e.preventDefault();
    getProducts();
    if (purchaseStore.slot !== "") {
      const option = await swal({
        text: `
          You are about to purchase: 
          ${Object.keys(purchaseStore.extras).map((e) =>
            e.concat(" x").concat(purchaseStore.extras[e])
          )}
          Ticket for ${purchaseStore.title} on the ${
          purchaseStore.slot
        } parking lot, 
          for a total of $${purchaseStore.total}.
          `,
        buttons: true
      })    
      const data = {
        description: `${Object.keys(purchaseStore.extras).map((e) =>
          e.concat(" x").concat(purchaseStore.extras[e])
        )}, Ticket for ${purchaseStore.title} on the ${
          purchaseStore.slot
        } parking lot.`,
        total: purchaseStore.total,
        parking_lot: purchaseStore.slot,
        extras: Object.keys(purchaseStore.extras).map((e) =>
          e.concat(" x").concat(purchaseStore.extras[e])
        ),
        movie_title: purchaseStore.title,
        date: purchaseStore.date?.slice(0, 10),
        time: purchaseStore.time,
      };
      if (option) {
        postPayment(data);
        await swal("Going to pay...", {
          icon: "success",
          buttons: false,
          timer: 1500
        });
      }
    } else {
      swal({
        title: "You must select a parking slot",
        icon: "warning",
        timer: 2000,
        buttons: false
      })      
    }
  };
  const handleChange = function(e){
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmitExtra = async function(e){
    e.preventDefault();
    await axios.post('http://localhost:3001/products', state, config);
    setState({
      name: '', 
      category: '',
      price: 0,
      stock:1000,
      imgUrl: '',
      combo: false
    });
    getProducts();
  }
  const handleSubmitCombo = async function(e){
    e.preventDefault();
    await axios.post('http://localhost:3001/products', state, config);
    setState({
      name: '', 
      category: '',
      price: 0,
      stock:1000,
      imgUrl: '',
      combo: false
    });
    getProducts();
  }
  const handleShowAddExtra = function(e){
    e.preventDefault();
    setShowForm({
      extra:true,
      combo:false
    })
    setState({
      ...state,
      combo:false,
    })
    getProducts();
  }
  const handleShowAddCombo= function(e){
    e.preventDefault();
    setShowForm({
      extra:false,
      combo:true
    })
    setState({
      ...state,
      combo:true,
    })
    getProducts();
  }
  return (
    <div>
      {purchaseStore ? (
        <Container>
          <MovieData>
            <MovieDetails>
              <h3>{purchaseStore.title || "Title"}</h3>
              <p>
                Schedule:{" "}
                {purchaseStore.day.concat(", ").concat(purchaseStore.date?.slice(5, 10)).concat(", ").concat(purchaseStore.time) ||
                  "Day and time"}
              </p>

              <p>Price: ${(purchaseStore.day === "Twesday" || purchaseStore.day === "Wednesday") ? purchaseStore.price + ' - 30% Off!!': purchaseStore.price }</p>
            </MovieDetails>
            <div>
              <RedText>Select your parking lot</RedText>
              {purchaseStore.parking ? (
                <ParkingLot className="parkingLot">
                  <ParkingLine>
                    {purchaseStore.parking?.slice(20, 30).map((e) => (
                      <Car key={e.slot} slot={e.slot} ocuppied={e.ocuppied} />
                    ))}
                  </ParkingLine>
                  <ParkingLine>
                    {purchaseStore.parking?.slice(10, 20).map((e) => (
                      <Car key={e.slot} slot={e.slot} ocuppied={e.ocuppied} />
                    ))}
                  </ParkingLine>
                  <ParkingLine>
                    {purchaseStore.parking?.slice(0, 10).map((e) => (
                      <Car key={e.slot} slot={e.slot} ocuppied={e.ocuppied} />
                    ))}
                  </ParkingLine>
                  <Screen>
                    <div>Screen</div>
                  </Screen>
                  <Reference>
                    <img
                      src="https://res.cloudinary.com/djunuon2e/image/upload/c_scale,h_40/v1625694896/redCar_bydkdo.png"
                      alt=""
                    />
                    <div>Ocuppied</div>
                    <img
                      src="https://res.cloudinary.com/djunuon2e/image/upload/c_scale,h_40/v1625694896/whiteCar_cafb44.png"
                      alt=""
                    />
                    <div>Available</div>
                    <img
                      src="https://res.cloudinary.com/djunuon2e/image/upload/c_scale,h_40/v1625694896/blueCar_anvl0c.png"
                      alt=""
                    />
                    <div>Selected</div>
                    &nbsp;&nbsp;
                    {purchaseStore.slot !== "" ? (
                      <div>Parking Lot:&nbsp;{purchaseStore.slot}</div>
                    ) : null}
                  </Reference>
                </ParkingLot>
              ) : (
                <h1>ParkingLot</h1>
              )}
            </div>
          </MovieData>

          <div>
            <div>
              <RedText>Extras</RedText>
            </div>
            <ProductsBox>
              {props.products &&
                props.products
                  .filter((e) => e.combo === false)
                  .map((e) => (
                    <Product
                      key={e.name}
                      name={e.name}
                      price={e.price}
                      imgUrl={e.imgUrl}
                    />
                  ))}
                  {admin ? 
                  <AddProduct> 
                  {!showForm.extra && <button className="addButton" name="extra" onClick={e => handleShowAddExtra(e)}>+</button>}                  
                  {showForm.extra && 
                  <form onSubmit={(e) =>handleSubmitExtra(e)}> 
                    <div>
                      <div>
                       <input type="text" className="input" onChange={(e) => handleChange(e)} value={state.imgUrl} name='imgUrl' placeholder='Product Image' required />
                      </div>
                      <div>
                        <input type="text" className="input" onChange={(e) => handleChange(e)} value={state.name} name='name' placeholder='Product Name' required />
                      </div>
                      <div>
                        <input type="text" className="input" onChange={(e) => handleChange(e)} value={state.category} name='category' placeholder='Product Category' required />
                      </div>
                      <div>
                        <input type="number" className="input" min="0" onChange={(e) => handleChange(e)} value={state.price} name='price' placeholder='Product Price' required />
                      </div>
                      <div className="submit">
                        <input type="submit" className="submitBtn" value="Add Product"/>
                      </div>
                    </div>
                  </form>}
                  
                </AddProduct>
                : null}
                  
            </ProductsBox>
          </div>

          <div>
            <div>
              <RedText>Combos</RedText>
            </div>
            <div>
              <ProductsBox>
                {props.products &&
                  props.products
                    .filter((e) => e.combo === true)
                    .map((e) => (
                      <Product
                        key={e.name}
                        name={e.name}
                        price={e.price}
                        imgUrl={e.imgUrl}
                      />
                    ))}
                    {admin ? 
                    <AddProduct> 
                    {!showForm.combo && <button className="addButton" name="combo" onClick={e => handleShowAddCombo(e)}>+</button>}        
                    {showForm.combo && <form  onSubmit={(e) =>handleSubmitCombo(e)}> 
                      <div>
                        <div>
                          <input type="text" className="input" onChange={(e) => handleChange(e)} value={state.imgUrl} name='imgUrl' placeholder='Combo Image' required />
                        </div>
                        <div>
                          <input type="text" className="input" onChange={(e) => handleChange(e)} value={state.name} name='name' placeholder='Combo Name' required />
                        </div>
                        <div>
                          <input type="text" className="input" onChange={(e) => handleChange(e)} value={state.category} name='category' placeholder='Combo Category' required />
                        </div>
                        <div>
                          <input type="number" className="input" min="0" onChange={(e) => handleChange(e)} value={state.price} name='price' placeholder='Combo Price' required />
                        </div>
                        <div className="submit">
                          <input type="submit" className="submitBtn" value="Add Combo"/>
                        </div>
                      </div>
                    </form>}
                  </AddProduct>
                : null}
              </ProductsBox>
            </div>
          </div>

          <div>
            <RedText>
              * You can choose sweet or salty popcorn once you get there!
            </RedText>
            <p id="purchase"></p>
            <BuyBox>
              {purchaseStore.extras &&
                Object.keys(purchaseStore.extras).length > 0 && (
                  <StoredProducts>Extras:</StoredProducts>
                )}
              {purchaseStore.extras &&
                Object.keys(purchaseStore.extras).map((e) => (
                  <StoredProducts>
                    {e}&nbsp;x&nbsp;{purchaseStore.extras[e]}&nbsp;-
                  </StoredProducts>
                ))}

              <Total>Total: ${purchaseStore.total}</Total>
              {token ? (
                <BuyButton onClick={(event) => handleBuy(event)}>Buy</BuyButton>
              ) : (
                <div className="notLogged">
                  <button className="disabledBtn" disabled>
                    Buy
                  </button>
                  <label>
                    You cant buy if you are not{" "}
                    <a href="http://localhost:3000/login">logged in</a>
                  </label>
                </div>
              )}
            </BuyBox>
          </div>
        </Container>
      ) : (
        <h1>There is nothing in your cart!</h1>
      )}
      <Footer marginTop="5px" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(getProducts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);