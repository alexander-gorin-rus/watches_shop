import React from 'react'
import './style.home.scss'
import Directory from '../../directory/Directory';
import { HomePageContainer } from './HomePageContainer';

const Home = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}

export default Home
