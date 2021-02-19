import React from "react";
import {Link } from "react-router-dom" 

import "./Home.css"

const Home = () => {

    return (
        <div className="Home-main">
            <h1 className="Home-title">Find Love</h1>
            <h1 className="Home-title">Find Yourself</h1>
            <Link to='/APIimc' className="button">Enter</Link>
        </div>
    )
}
export default Home