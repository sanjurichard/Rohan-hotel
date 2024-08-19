import React from 'react'
import './Home.css'
import logo from '../../assets/contact1.jpg'

const Home = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Rohan Hotel</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Home
