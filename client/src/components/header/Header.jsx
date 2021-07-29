import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { HeaderAlpha, Head, HeadInsider, HeaderIcon, Socials, Title, Face, Tweet, Insta } from './Styles';

export default function Header() {
    return (
        <HeaderAlpha>
            <Head>
                <HeadInsider>
                    <Link to='/'>
                    <HeaderIcon/>
                    </Link>
                    <Title>Henry Autocinema</Title>
                </HeadInsider>
                <HeadInsider>
                    <Socials href="http://www.instagram.com/" target='_blank' rel="noopener noreferrer"><Insta size="50" /></Socials>
                    <Socials href="http://www.twitter.com/" target='_blank' rel="noopener noreferrer"><Tweet size="50" /></Socials>
                    <Socials href="http://www.facebook.com/" target='_blank' rel="noopener noreferrer"><Face size="50" /></Socials>
                </HeadInsider>
            </Head>
            <NavBar />
        </HeaderAlpha>
    )
}