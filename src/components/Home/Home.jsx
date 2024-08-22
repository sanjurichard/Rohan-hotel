import React, { useState } from 'react';
import './Home.css';
import logo from '../../assets/rohanlogo.png';
import resrev from '../../assets/rohanreserv.png';
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
        </div>
    );
};

export default Home;
