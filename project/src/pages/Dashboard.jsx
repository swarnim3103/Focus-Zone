import React from 'react';
import {Nav,Footer,PomodoroTimer,Menu} from '../sections/index.js';

const Dashboard = () => {
    return(
        <>
        <Nav page="dashboard"/>
        <div className="bg-gradient-to-b from-customBlue4 to-white overflow-hidden">
            <PomodoroTimer/>
<Menu/>
        <h1>hello</h1>
        </div>
       <Footer/>
        </>
    )
}
export default Dashboard;