import React from 'react'
import './Home.css'
import logo from '../../assets/rohanlogo.png'
// import backgroundImage from '../../assets/hotel.jpg';

const Home = () => {
    return (
        <header className="hero-section" >
            <div className="container">
                <img src={logo} alt="Rohaan Hotels Logo" className="logo" />
                <h1>
                    <span className="first-line">Best Place to</span>
                    <span className="second-line">Relax & Enjoy</span>
                </h1>
            </div>
        </header>
    )
}

export default Home
