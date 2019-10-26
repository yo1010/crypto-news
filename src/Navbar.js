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
        this.scrollTop = this.scrollTop.bind(this);
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
    scrollTop() {
        window.scrollTo(0, 0);
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
                <NavWrapper className={this.state.hasScrolled ? 
                    'navbar navbar-expand-sm navbar-dark' : 
                    'no-op navbar navbar-expand-sm navbar-dark'}>
                    <Link to="/">
                        <div className="navbar-brand ml-2" onClick={() => this.scrollTop()}>
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
                                    <button className="button" onClick={() => this.scrollTop()}>
                                        <div className="slider mx-auto"/>
                                        Новости</button>
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
                                <li className="text-capitalize nav-item">
                                    <button className="button">
                                        <i className="fab fa-telegram-plane icon-sm" /></button></li>
                            </ul>
                        </div>
                    </div>
                </NavWrapper>
                <div className="header">
                    <div className="row">
                        <div className="col-sm-12 data">
                            <Helmet>
                            <script type="text/javascript" src="https://widget.coinlore.com/widgets/ticker-widget.js"></script>
                            </Helmet>
                            <div className="coinlore-priceticker-widget" 
                            data-mcurrency="rub" data-bcolor="#fff" 
                            data-scolor="#333" data-ccolor="#428bca" data-pcolor="#428bca"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const NavWrapper = styled.nav`
    background:white;
    .header {
        margin-top: 7rem;
    }
    .dateholder {
        background: none;
        border: none;
        font-weight: 900;
        outline: none;
        font-size: 0.9rem;
        color: red;
        transform: translate(0px, 5px);
        height: 1.5rem;
        width: 10rem;
        text-transform: capitalize;
        cursor: default;
        font-family: 'Yeseva One', sans-serif;
    }
    .navbar-nav {
        vertical-align: top !important;
    }
    #navbarSupportedContent {
        float: left !important;
    }
    i {
        font-size: 2rem;
        color: black;
    }
    .btn-about{
        text-transfom: lowercase !important;
        font-family: 'Staatliches', sans-serif;
        font-size: 1.2rem;
    }
    .button {
        background: none;
        border: none;
        outline: none;
        font-size: 1.1rem;
        font-family: 'Yeseva One', sans-serif;
    }
    .button:hover {
        color: red;
        i {
            color: red;
        }
        .slider {
            animation: widen 0.5s;
            width: 100%;
            backgroun: red;
            border-top: solid 3px red;
        }
    }
    .navbar-brand-img{
        width: 3rem;
        height: 3rem;
    }
    &.no-op{
        background: white;
        transition: 1s !important;
    }
    .navbar-collapse{
        margin-left: auto !important;
    }
    &.fixed-top{
        background: white;
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
            margin-right: auto;
        }
        .navbar-collapse > * {
            flex-direction: column !important;
        }
        .icon-sm {
            font-size: 1.5rem !important;
        }
        .navbar-nav > * {
            margin-top: 0.5rem;
        }
        .dateholder {
            display: none;
        }
    }
    @keyframes text-jump {
        from { transform: translate(0px, 0px); }
        to { transform: translate(0px, -3px); }
    }
    @keyframes widen {
        from {width: 0%} to {width: 100%}
    }
    @keyframes shorten {
        from {width: 100%} to {width: 0%}
    }
`