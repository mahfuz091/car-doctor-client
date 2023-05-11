// import React from 'react';

import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import UserStat from "../UserStat/UserStat";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <UserStat></UserStat>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;