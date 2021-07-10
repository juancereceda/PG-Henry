import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiFillTwitterCircle as Twitter,
  AiFillFacebook as Fb,
  AiFillInstagram as Instagram,
} from "react-icons/ai";
import { BiCameraMovie as Camera } from "react-icons/bi";
import { TiShoppingCart as ShoppingCart } from "react-icons/ti";

// ESTILOS DEL HEADER

export const HeaderAlpha = styled.div`    
    height: 25%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #222831;
`;

export const Head = styled.div`
    background-color: #F05454;
    width: 98%;
    height: 67.5%;
    margin-bottom: .3em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;    
    border-radius: .7em;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.7),
                inset 2px 3px 5px rgba(0,0,0,0.3),
                inset -2px -3px 5px rgba(0,0,0,0.5);
`;

export const HeadInsider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;  
`;

export const HeaderIcon = styled(Camera)`
  height: 3em;
  width: 3em;
  padding: 1em;
  background-color: #222831;
  border-radius: 50%;
  margin: .8em .8em .8em .5em;
  color: #e8e8e8;
`;

export const Socials = styled.a`
  margin: 2em;
  height: 3em;
  width: 3em;
`;
export const Title = styled.h1`
  color: #e8e8e8;
  margin-left: .6em;
`;

export const Face = styled(Fb)`
  color: #30475e;
`;

export const Tweet = styled(Twitter)`
  color: #30475e;
`;

export const Insta = styled(Instagram)`
  color: #30475e;
`;

// ESTILOS DEL NAVBAR

export const NavBarAlpha = styled.div`
    height: 27.5%;
    width: 98%;
    padding: 1.2em 0;
    background-color: #30475E;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: .7em;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.7),
                inset 2px 3px 5px rgba(0,0,0,0.3),
                inset -2px -3px 5px rgba(0,0,0,0.5);
`;

export const SignButton = styled.button`
  height: 2.2em;
  border-radius: 5px;
  background-color: #f05454;
  color: #e8e8e8;
  border: none;
`;

export const Cart = styled(ShoppingCart)`
  color: #e8e8e8;
`;

export const Linked = styled(Link)`
  color: #e8e8e8;
  text-decoration: none;
`;

// ESTILOS SIGNFORM

export const Signform = styled.div`
    position: fixed;
    top: 15%;
    left: 30%;
    height: 60%;
    width: 30%;
    padding: 10px;
    background-color: #30475E;
    padding-top: 25px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.7),
                inset 2px 3px 5px rgba(0,0,0,0.3),
                inset -2px -3px 5px rgba(0,0,0,0.5);
`;

export const FormForm = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Inputs = styled.input`
    font-size: 25px;
    padding: 5px;
    margin-top: -20px;
`;

export const Buttons = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const TwoButtons = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const GoogleButton = styled.button`
    height: 40px;
    width: 100%;
    background-color: #E8E8E8;
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const LogButton = styled.button`
    height: 40px;
    width: 49%;
    font-size: 20px;
    background-color: #F05454;
    color: #E8E8E8;
    border-radius: 5px;
`;

export const SigButton = styled.button`
    height: 40px;
    width: 49%;
    font-size: 20px;
    background-color: #E8E8E8;
    border-radius: 5px;
`;

export const Linking = styled(Link)`
    color: black;
    text-decoration: none;
`;

export const CloseButton = styled.button`
    height: 25px;
    width: 25px;
    background-color: #F05454;
    color: #E8E8E8;
    text-align: center;
    align-self: flex-end;
    margin-top: -15px;
`;