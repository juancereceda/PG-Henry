import React from 'react';
import NavBar from './NavBar';
import { HeaderAlpha, Head, HeadInsider, HeaderIcon, Socials, Title, Face, Tweet, Insta } from './Styles';

export default function Header() {
    return (
        <HeaderAlpha>
            <Head>
                <HeadInsider>
                    <HeaderIcon/>
                    <Title>Henry Autocinema</Title>
                </HeadInsider>
                <HeadInsider>
                    <Socials href="http://www.instagram.com/"><Insta size="50" /></Socials>
                    <Socials href="http://www.twitter.com/"><Tweet size="50" /></Socials>
                    <Socials href="http://www.facebook.com/"><Face size="50" /></Socials>
                </HeadInsider>
            </Head>
            <NavBar />
        </HeaderAlpha>
    )
}