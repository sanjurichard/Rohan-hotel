import React, { useState } from 'react';
import './Home.css';
import logo from '../../assets/rohanlogo.png';
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5-1.png';
import image6 from '../../assets/Rectangle 27.png';
import image7 from '../../assets/Rectangle 28.png';
import image8 from '../../assets/Rectangle 29.png';
import image9 from '../../assets/Rectangle 30.png';
import image10 from '../../assets/Rectangle 31.png';
import image11 from '../../assets/Rectangle 33.png';
import image12 from '../../assets/Rectangle 32.png';
import resrev from '../../assets/rohanreserv.png';
import cleartrip from '../../assets/cleartrip.png';
import agoda from '../../assets/agoda.png';
import booking from '../../assets/booking.png';
import expedia from '../../assets/expedia.jpg';
import goibibo from '../../assets/goibo.png';
import hotels from '../../assets/hotels.png';
import mmtrip from '../../assets/mmtrip.png';
import transadvisor from '../../assets/tranadvisor.png';
import trip from '../../assets/trip.png';
import vio from '../../assets/vio.png';
import htg from '../../assets/htg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCalendar as faCalendarRegular } from '@fortawesome/free-regular-svg-icons';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Home = () => {
    const [adults, setAdults] = useState(2);
    const [kids, setKids] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleAdultsChange = (type) => {
        if (type === 'increment') {
            setAdults(adults + 1);
        } else if (type === 'decrement' && adults > 1) {
            setAdults(adults - 1);
        }
    };

    const handleKidsChange = (type) => {
        if (type === 'increment') {
            setKids(kids + 1);
        } else if (type === 'decrement' && kids > 0) {
            setKids(kids - 1);
        }
    };

    const partners = [
        { name: 'Cleartrip.com', price: '₹2,160', cancellation: 'Free cancellation until 11 Jun', url: 'https://www.cleartrip.com', imgSrc: cleartrip },
        { name: 'Goibibo.com', price: '₹2,398', cancellation: 'Free cancellation until 11 Jun', url: 'https://www.goibibo.com', imgSrc: goibibo },
        { name: 'Agoda', price: '₹2,419', cancellation: 'Free cancellation until 10 Jun', url: 'https://www.agoda.com', imgSrc: agoda },
        { name: 'MakeMyTrip.com', price: '₹2,489', cancellation: 'Free cancellation until 11 Jun', url: 'https://www.makemytrip.com', imgSrc: mmtrip },
        { name: 'Tripadvisor.in', price: '₹2,419', cancellation: 'Free cancellation until 10 Jun', url: 'https://www.tripadvisor.in', imgSrc: transadvisor },
        { name: 'Vio.com', price: '₹2,419', cancellation: 'Free cancellation until 11 Jun', url: 'https://www.vio.com', imgSrc: vio },
        { name: 'Booking.com', price: '₹3,427', cancellation: 'Free cancellation until 9 Jun', url: 'https://www.booking.com', imgSrc: booking },
        { name: 'Hotels.com', price: '₹2,846', cancellation: 'Free cancellation until 11 Jun', url: 'https://www.hotels.com', imgSrc: hotels },
        { name: 'Expedia.co.in', price: '₹2,846', cancellation: 'Free cancellation until 11 Jun', url: 'https://www.expedia.co.in', imgSrc: expedia },
        { name: 'Trip.com', price: '₹3,698', cancellation: 'Free cancellation until 11 Jun', url: 'https://www.trip.com', imgSrc: trip },
        { name: 'HomeToGo.com', price: '₹2,568', cancellation: 'Free cancellation until 11 Jun', url: 'https://www.Hometogo.com', imgSrc: htg },
    ];

    return (
        <div>
            <header className="hero-section">
                <div className="container">
                    <img src={logo} alt="Rohaan Hotels Logo" className="logo" />
                    <h1>
                        <span className="first-line">Best Place to</span>
                        <span className="second-line">Relax & Enjoy</span>
                    </h1>
                </div>
            </header>

            <section className="reservation-section">
                <div className="reservation-form">
                    <h2>Reservation.</h2>
                    <p className="para">
                        Book your room right now and start your amazing adventure full of discoveries and experiences with Rohaan Hotels.
                        <span className="offer"> Get 20% off on Bulk Bookings</span>
                    </p>
                    <form>
                        <label htmlFor="name">Your Name</label>
                        <div className="input-icon-wrapper">
                            <FontAwesomeIcon icon={faUser} className="input-icon" />
                            <input type="text" id="name" placeholder="Enter your name..." />
                        </div>

                        <label htmlFor="email">Your E-Mail</label>
                        <div className="input-icon-wrapper">
                            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                            <input type="email" id="email" placeholder="Enter your e-mail..." />
                        </div>

                        <label htmlFor="phone">Your Mobile Number</label>
                        <div className="input-icon-wrapper">
                            <FontAwesomeIcon icon={faPhone} className="input-icon" />
                            <input type="tel" id="phone" placeholder="Enter your phone..." />
                        </div>

                        <div className="date-fields">
                            <div className="date-field">
                                <label htmlFor="date-from">Date From</label>
                                <div className="date-picker-wrapper">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        id="date-from"
                                        dateFormat="yyyy-MM-dd"
                                        className="date-picker-input"
                                    />
                                    <FontAwesomeIcon icon={faCalendarRegular} className="date-picker-icon" />
                                </div>
                            </div>
                            <div className="date-field">
                                <label htmlFor="date-to">Date To</label>
                                <div className="date-picker-wrapper">
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        id="date-to"
                                        dateFormat="yyyy-MM-dd"
                                        className="date-picker-input"
                                    />
                                    <FontAwesomeIcon icon={faCalendarRegular} className="date-picker-icon" />
                                </div>
                            </div>
                        </div>

                        {/* Widget for selecting adults and kids */}
                        <div className="widget-container">
                            <div className="counter">
                                <label>Adults</label>
                                <div className="counter-controls">
                                    <button type="button" onClick={() => handleAdultsChange('increment')}>+</button>
                                    <span>{adults}</span>
                                    <button type="button" onClick={() => handleAdultsChange('decrement')}>-</button>
                                </div>
                            </div>
                            <div className="counter">
                                <label>Kids</label>
                                <div className="counter-controls">
                                    <button type="button" onClick={() => handleKidsChange('increment')}>+</button>
                                    <span>{kids}</span>
                                    <button type="button" onClick={() => handleKidsChange('decrement')}>-</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <button className="reserve-button">Reserve Now</button>
                </div>
                <div className="reservation-image">
                    <img src={resrev} alt="Rohaan Hotels Logo" />
                </div>
            </section>
            <div className="home-container">
                <h2 className='title'>Our Rooms</h2>
                <div className="image-grid-wrapper">
                    <div className="large-image-container">
                        <img src={image5} alt="Image 5" className="large-image" />
                    </div>
                    <div className="small-images-container">
                        <div className="small-image-row">
                            <img src={image1} alt="Image 1" className="small-image" />
                            <img src={image2} alt="Image 2" className="small-image" />
                        </div>
                        <div className="small-image-row">
                            <img src={image3} alt="Image 3" className="small-image" />
                            <img src={image4} alt="Image 4" className="small-image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="comparison-container">
                <div className="comparison-text">
                    <h1>Compare and book from our trusted partners.</h1>
                    <p>Easily compare and book services from our trusted partners, ensuring you get the best options available with confidence.</p>
                </div>
                <div className="comparison-list">
                    {partners.map((partner, index) => (
                        <div key={index} className="partner-item">
                            <div className="partner-info">

                                <img className="partner-logo" src={partner.imgSrc} alt={`${partner.name} logo`} />
                                <div className="partner-details">
                                    <h2>{partner.name}</h2>
                                    <p>{partner.cancellation}</p>
                                </div>
                            </div>
                            <div className="partner-price">
                                <p>{partner.price}</p>
                                <button onClick={() => window.open(partner.url, '_blank')}>Visit site</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="home-container">
                <h2 className='title'>Gallery.</h2>
                <div className="image-grid-wrapper1">
                    <div className="large-image-container">
                        <img src={image6} alt="Image 5" className="large-image1" />
                    </div>
                    <div className="small-images-container1">
                        <div className="small-image-row">
                            <img src={image7} alt="Image 1" className="small-image7" />
                            <img src={image9} alt="Image 2" className="small-image9" />

                        </div>
                        <div className="small-image-row">
                            <img src={image8} alt="Image 3" className="small-image8" />
                            <img src={image10} alt="Image 4" className="small-image10" />

                        </div>
                       
                        <img src={image12} alt="Image 2" className="small-image12" />
                        <img src={image11} alt="Image 2" className="small-image11" />
                    </div>

                </div>
            </div>






        </div>
    );
};

export default Home;
