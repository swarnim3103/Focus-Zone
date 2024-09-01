import React from 'react';
import {Nav,Footer,PomodoroTimer,Menu,MotivationalQuote} from '../sections/index.js';

const Dashboard = () => {
    return(
        <>
        <Nav page="dashboard"/>
        <div className="bg-gradient-to-b from-customBlue4 to-white overflow-hidden">
            <PomodoroTimer/>
            <MotivationalQuote/>
            <Menu/>
        </div>
       <Footer/>
        </>
    )
}
export default Dashboard;