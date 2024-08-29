import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="headerleft">
                <Link to="/"> <img className="logoicon" src="src/assets/movies.jpg" /></Link>
                <div className='headerlink'>
                    <Link to="/movies/popular" className="headerlinks">Popular</Link>
                    <Link to="/movies/top_rated" style={{ textDecoration: "none" }} className="headerlinks"><span>Top Rated</span></Link>
                    <Link to="/movies/upcoming" className="headerlinks">Upcoming</Link>

                </div>

            </div>

            {/* <div className="headerright">
                <input type="text" placeholder="Search.." />
            </div> */}
        </div>
    )
}

export default Header