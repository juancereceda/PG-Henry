import React from 'react';
import styled from 'styled-components';
import { BiCameraMovie as Camera } from "react-icons/bi";

function Footer({ marginTop }) {
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
    // margin-top: ${marginTop};
    // position: absolute;
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
    font-size:20px;
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

    @media screen and (min-width: 600px) {
    .r-footer > * {
    flex: 1;
    }

    .features {
    flex-grow: 2;
    }

    .l-footer {
    flex: 1 0px;
    }

    .r-footer {
    flex: 2 0px;
    }
    }
    `;

    return (
        <StyledDiv>
            <footer className="footer">
                <div className="l-footer">
                    <h2><HeaderIcon className='asd'/></h2>
                    <h3>Autocinema App 🍿</h3>
                    <p>
                    Application designed and developed by Henry's students from the FT-13 Cohort in the final project</p>
                </div>
                <ul className="r-footer">
                    <li>
                        <h2>Social</h2>
                        <ul className="box">
                            <li><a href="www.facebook.com">Facebook</a></li>
                            <li><a href="www.twitter.com">Twitter</a></li>
                            <li><a href="www.instagram.com">Instagram</a></li>
                            <li><a href="www.pinterest.com">Pinterest</a></li>
                        </ul>
                    </li>
                    <li className="features">
                        <h2>
                            Information</h2>
                        <ul className="box h-box">
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/">Sales</a></li>
                            <li><a href="/">Tickets</a></li>
                            <li><a href="/">Certifications</a></li>
                            <li><a href="/">Customer Service</a></li>
                        </ul>
                    </li>
                    <li>
                        <h2>
                            Legal</h2>
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