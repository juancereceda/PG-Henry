import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import React from 'react';
import styled from 'styled-components';
import { BiCameraMovie as Camera } from "react-icons/bi";

function Footer({moviesLength}) {
    const HeaderIcon = styled(Camera)`
    height: 55px;
    width: 55px;
    padding: 12px;
    background-color: #222831;
    border-radius: 50%;
    margin-right: 30px;
    color: #e8e8e8;
    transition: 600ms;
    &:hover {
    transform: rotate(-180deg);
    transition: 600ms;
    }
`;  

    const StyledDiv = styled.div`
    position: relative;
    ${({ moviesLength }) => moviesLength === 1 ? `
    top: 200px;
  ` : `top: 50px;`}
    width:100%;
    .footer {
    display: flex;
    flex-flow: row wrap;
    padding: 20px;
    color: #fff;
    background-color: #30475E;
    }

    .footer > * {
    flex:  1 100%;
    }

    .l-footer {
    margin-right: 1.25em;
    margin-bottom: 2em;
    }

    h2 {
    font-weight: 400;
    font-size: 15px;
    }

    .footer ul {
    list-style: none;
    padding-left: 0;
    }

    .footer li {
    line-height: 2em;
    }

    .footer a {
    text-decoration: none;
    }

    .r-footer {
    display: flex;
    flex-flow: row wrap;
    }

    .r-footer > * {
    flex: 1 50%;
    margin-right: 1.25em;
    }

    .box a {
    color: #999;
    &:hover{
    color: #F05454;
    font-size: .95em;
    transition: 300ms;
    }
    }

    .h-box {
    column-count: 2;
    column-gap: 1.25em;
    }

    .b-footer {
    text-align: center;
    color: #999;
    padding-top: 20px;
    }

    .l-footer p {
    padding-right: 20%;
    color: #999;
    }   

    .ulSocial {
        display: flex;
        width: 10%;
        justify-content: space-around;
        margin-right: 5em;
        align-items: center;
    }

    .box { 
        width:15%;
    }

    @media screen and (min-width: 600px) {
    .r-footer > * {
    flex: 1;
    }

    .l-footer {
    flex: 1 0px;
    }

    .r-footer {
        flex: 2 0px;
    }

    .features { 
        display: flex;
        flex-direction: column;
        margin-left: -3em;
        align-items: center;        
        margin-right: 1em;
    }

    .legal {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 1em;
    }

    .social {
        display: flex; 
        flex-direction: column;
        h2 {
            align-self: center;
            margin-right: 5em;
        }
    }
    .box {
        margin-left: .6em;
    }
    .ulSocial {       
        width: 80%;        
    }
    
    }   
    `;

    return (
        <StyledDiv moviesLength={moviesLength} >
            <footer className="footer">
                <div className="l-footer">
                    <h2><HeaderIcon className='asd'/></h2>
                    <h3>Autocinema App 🍿</h3>
                    <p>
                    Application designed and developed by Henry's students from the FT-13 Cohort in the final project</p>
                </div>
                <ul className="r-footer">
                    <li className='social'>
                        <h2>Social</h2>
                        <ul className="box ulSocial">
                            <li><a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer"><FaFacebook /></a></li>
                            <li><a href="https://www.twitter.com" target='_blank' rel="noopener noreferrer"><FaTwitter /></a></li>
                            <li><a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer"><FaInstagram /></a></li>
                            <li><a href="https://www.pinterest.com" target='_blank' rel="noopener noreferrer"><FaPinterest /></a></li>
                        </ul>
                    </li>
                    <li className="features">
                        <h2>Information</h2>
                        <ul className="box h-box">
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/">Sales</a></li>
                            <li><a href="/">Tickets</a></li>
                            <li><a href="/">Certifications</a></li>
                            <li><a href="/">Customer Service</a></li>
                        </ul>
                    </li>
                    <li className='legal'>
                        <h2>Legal</h2>
                        <ul className="box">
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms of Use</a></li>
                            <li><a href="/">Contract</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="b-footer">
                    <p>
                        All rights reserved by © Autocinema App </p>
                </div>
            </footer>
        </StyledDiv>
    )
}

export default Footer;