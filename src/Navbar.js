import React, { Component } from 'react';
import styled from "styled-components";
import logo from '../public/img/Cryptocurrency_Logo.svg';
import CurrentDate from './CurrentDate';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            hasScrolled: false,
            modalOpen: false,
            modalOpenPhone: false,
            toggle: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleScroll() {
        let topOfPage = window.pageYOffset;
        // Check if it was scrolled back to the top.
        if (topOfPage <= 20) {
            this.setState(() => {
                return {hasScrolled: false}
            })
        } else {
            this.setState(() => {
                return {hasScrolled: true}
            })
        }
    }
    handleClick(e) {
        let stateToggle = this.state.toggle;
        if ((e.target.className === "fas fa-bars") || (e.target.className === "navbar-toggler")) {
            this.setState(() => {
                return{
                    toggle: true
                }
            })
        }
        if (stateToggle === true) { 
            this.setState(() => {
                return{
                    toggle: false
                }
            })
            }
    }
    componentDidMount() {
        // Listen on scrolling event, call our function.
        window.addEventListener('scroll', this.handleScroll); 
        window.addEventListener('click', this.handleClick);
    }
    componentWillUnmount() {
        // Unlisten if the component unmounts.
        window.removeEventListener('scroll', this.handleScroll);
        window.addEventListener('click', this.handleClick);
    }
    render() {
        return (
            <div className="nav-container fixed-top">
                <div className="header">
                    <div className="row">
                        <div className="col-sm-12 data">
                            <Helmet>
                                <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"></script>
                            </Helmet>
                            <coingecko-coin-price-marquee-widget currency="eur" coin-ids="bitcoin,ethereum,dascoin,litecoin,ripple,eos,dash" locale="en" vce-ready=""></coingecko-coin-price-marquee-widget>
                        </div>
                    </div>
                </div>
                <NavWrapper className={this.state.hasScrolled ? 
                    'navbar navbar-expand-sm navbar-dark' : 
                    'no-op navbar navbar-expand-sm navbar-dark'}>
                    <Link to="/">
                        <div className="navbar-brand ml-2">
                            <img src={logo} alt="logo" className="navbar-brand-img"/>
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-target="#navbarSupportedContent" 
                    aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button> 
                    <div className={this.state.toggle ? "navbar-collapse" :
                        "navbar-collapse collapse ml-auto"}  id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="text-capitalize nav-item ml-1">
                                <Link to="/">
                                    <button className="button">
                                        News</button>
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <ul className="navbar-nav icon-nav">
                                <li className="text-capitalize nav-item ml-1">
                                    <CurrentDate /></li>                                                                                    
                                <li className="text-capitalize nav-item">
                                    <button className="button">
                                        <i className="fab fa-facebook-f icon-sm" /></button></li>
                                <li className="text-capitalize nav-item ml-1">
                                    <button className="button">
                                        <i className="fab fa-telegram-plane icon-sm" /></button></li>
                            </ul>
                        </div>
                    </div>
                </NavWrapper>
            </div>
        )
    }
}

const NavWrapper = styled.nav`
    .header {
        margin-top: 7rem;
    }
    .dateholder {
        background: none;
        border: none;
        font-weight: 900;
        outline: none;
        font-size: 1rem;
        color: red;
        transform: translate(0px, 5px);
        height: 1.5rem;
        width: 6rem;
        border-bottom: 2px solid red;
    }
    .navbar-nav {
        vertical-align: top !important;
    }
    .button {
        border-radius: 0.5rem;
        background: none;
        border: none;
        font-weight: 900;
        outline: none;
        font-size: 1.2rem;
    }
    #navbarSupportedContent {
        float: left !important;
    }
    i {
        font-size: 2rem;
        color: black;
    }
    button {
        animation: btn-show 0.5s;
        animation-timing-frame: ease-out;
    }
    .btn-about{
        text-transfom: lowercase !important;
        font-family: 'Staatliches', sans-serif;
        font-size: 1.2rem;
    }
    .button:hover {
        animation: text-jump 0.2s;
        text-shadow: 3px 3px 5px black;
        color: red;
        i {
            color: red;
        }
    }
    .navbar-brand-img{
        width: 3rem;
        height: 3rem;
    }
    &.no-op{
        background: var(--Green) !important;
        transition: 1s !important;
    }
    .navbar-collapse{
        margin-left: auto !important;
    }
    &.fixed-top{
        background: var(--Green-opacity);
        transition: 1s !important;
    }
    .navbar-toggler{
        outline: none;
        border: none;
        margin-right: 4px;
    }
    .navbar-toggler:hover{
        .fa-bars{
            color: red;
            text-shadow: 2px 2px 1px black;
        }
    }
    .fa-bars{
        color: black;
        padding-left: 2px;
    }
    @media (min-width: 768px) {
        .navbar-toggler {
            display: none !important;
        }
        .navbar-nav {
            width: 100%;
        }
    }
    @media (max-width: 576px) {
        li {
            margin-left: 0;
        }
        .navbar-toggler{
            margin-left: auto;
        }
        .navbar-collapse {
            width: 100%;
            margin-top: 0.5rem;
        }
        .navbar-collapse > * {
            flex-direction: column !important;
        }
        .icon-nav {
            flex-direction: row !important;
        }
        .icon-sm {
            font-size: 1.5rem !important;
        }
        .navbar-nav > * {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
        }
        .dateholder {
            display: none;
        }
    }
    @keyframes text-jump {
        from { transform: translate(0px, 0px); }
        to { transform: translate(0px, -3px); }
    }
    @keyframes btn-show {
        from {opacity: 0.5;} to {opacity: 1;}
    }
`