import React, { Component } from 'react';
import styled from "styled-components";
import logo from '../../public/img/Bitcoinia3.png';
import CurrentDate from './CurrentDate';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            hasScrolled: false,
            modalOpen: false,
            modalOpenPhone: false,
            toggle: false,
            inputValue: "",
            hideSearch: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.scrollTop = this.scrollTop.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.clearInputValue = this.clearInputValue.bind(this);
        this.hasClicked = this.hasClicked.bind(this);
        this.hasntClicked = this.hasntClicked.bind(this);
    }
    hasClicked() {
        if (this.state.hideSearch === false) {
            this.setState({hideSearch: true})
        }
        console.log(this.state.hideSearch);
    }
    hasntClicked() {
        if (this.state.hideSearch === true) {
            this.setState({hideSearch: false})
        }
        this.scrollTop()
    }
    updateInputValue(e) {
        let lowStr = e.target.value.toLowerCase();
        this.setState({
            inputValue: lowStr
        })
    }
    clearInputValue() {
        this.setState({
            inputValue: ""
        })
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
            if ((e.target.className === "fas fa-times") || (e.target.className === "navbar-toggler")) {
                this.setState(() => {
                    return{
                        toggle: false
                    }
                })
            }
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
            <ProductConsumer>
                {value => {
                    return (
                        <div className="nav-container fixed-top">
                            <div className="header">
                                <div className="row">
                                    <div className="col-sm-12 data">
                                        <Helmet>
                                        <script type="text/javascript" src="https://widget.coinlore.com/widgets/ticker-widget.js"></script>
                                        </Helmet>
                                        <div className="coinlore-priceticker-widget" 
                                        data-mcurrency="usd" data-bcolor="#fff" 
                                        data-scolor="#333" data-ccolor="#428bca" data-pcolor="#428bca"></div>
                                    </div>
                                </div>
                            </div>
                            <NavWrapper className="top-nav">
                                <ul className="navbar-nav icon-nav">                                                                                 
                                    <li className="text-capitalize nav-item ml-auto mr-3 nav-date">
                                        <CurrentDate /></li> 
                                </ul>
                            </NavWrapper>
                            <NavWrapper className={this.state.hasScrolled ? 
                                'navbar op navbar-expand-lg navbar-dark px-3' : 
                                'no-op navbar navbar-expand-lg navbar-dark px-3'}>
                                <Link to="/">
                                    <div className="navbar-brand" onClick={() => this.scrollTop()}>
                                        <img src={logo} alt="logo" className="navbar-brand-img"/>
                                    </div>
                                </Link>
                                <div className="search-bar row ml-auto">
                                    <button className={this.state.hideSearch ? "btn-search button hiddenInput" : "btn-search button"} onClick={()=>{
                                        this.hasClicked();
                                        }}>
                                        <i className="fas fa-search search-icon pt-1"></i></button>
                                    <form className="form-inline">
                                        <Link to="/search-results" className={!this.state.inputValue ? "disabled-link" : ""}>
                                            <button className={this.state.hideSearch ? "btn-search button" : "btn-search button hiddenInput"} type="submit" onClick={()=>{
                                                value.handleSearch(this.state.inputValue);
                                                this.clearInputValue();
                                                this.hasntClicked();
                                                }}>
                                                <i className="fas fa-search search-icon link-icon pt-1"></i></button>
                                        </Link>
                                        <input value={this.state.inputValue} className={this.state.hideSearch ? "form-control" : "form-control hiddenInput"} 
                                        onChange={this.updateInputValue} type="search" placeholder="Поиск Новостей" aria-label="Search"/>
                                    </form>
                                    <button className={this.state.hideSearch ? "btn-search button" : "btn-search button hiddenInput"} onClick={()=>{
                                        this.hasntClicked();
                                        }}>
                                        <i className="fas fa-arrow-left close-icon pt-1"></i></button>
                                </div>
                                <button className="navbar-toggler" type="button" data-target="#SupportedContent" 
                                aria-controls="#SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className={this.state.toggle ? "fas fa-times":"fas fa-bars"}></i>
                                </button>
                                <div className={this.state.toggle ? "navbar-collapse" :
                                    "navbar-collapse collapse"}  id="SupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="text-capitalize nav-item first-item py-1">
                                            <Link to="/">
                                                <button className="button" onClick={() => this.scrollTop()}>
                                                    <div className="slider"/>
                                                    Новости</button>
                                            </Link>
                                        </li>
                                        <li className="text-capitalize nav-item ml-1 py-1">
                                            <Link to="/bitcoin-news">
                                                <button className="button" onClick={() => this.scrollTop()}>
                                                    <div className="slider"/>
                                                    Биткойн</button>
                                            </Link>
                                        </li>
                                        <li className="text-capitalize nav-item ml-1 py-1">
                                            <Link to="/blockchain-news">
                                                <button className="button" onClick={() => this.scrollTop()}>
                                                    <div className="slider"/>
                                                    Блокчейн</button>
                                            </Link>
                                        </li>
                                        <li className="text-capitalize nav-item ml-1 py-1">
                                            <Link to="/crypto-dictionary">
                                                <button className="button" onClick={() => this.scrollTop()}>
                                                    <div className="slider"/>
                                                    <span className="orange">
                                                        Словарь</span></button>
                                            </Link>
                                        </li>
                                        <li className="text-capitalize nav-item row ml-1 mr-2">
                                            <a href="https://t.me/bitcoiniaru" target="_top">
                                                <button className="button py-1 mt-1">
                                                    <i className="fab fa-telegram-plane" /></button>
                                            </a>
                                            <a href="https://www.facebook.com/bitcoinia.ru/" target="_top">
                                                <button className="button py-1 mt-1">
                                                    <i className="fab fa-facebook-f" /></button>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </NavWrapper>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const NavWrapper = styled.nav`
    &.top-nav {
        padding-top: 0.1rem;
        height: 1.9rem;
    }
    padding: 0;
    background:white;
    .fab {
        font-size: 1.6rem;
    }
    .fab:hover {
        color: var(--mainOrange);
    }
    .orange {
        color: var(--mainOrange);
    }
    .disabled-link {
        pointer-events: none;
    }
    .btn-search {
        padding-left: 0.7rem;
        padding-right: 0.7rem;
    }
    .hiddenInput {
        display: none;
    }
    input, input:focus {
        background: none;
        color: black;
        border: none;
        outline: none;
        background: none;
        box-shadow: none;
        ::placeholder {
            color: black;
        }
    }
    .search-bar {
        margin-left: 1rem;
        border-radius: 3rem;
        flex-direction: row !important;
        border: solid 2px var(--mainOrange);
        transition: 1s;
    }
    .search-bar:active {
        animation: color 2s ease-out;
    }
    .form-control {
        width: 11rem;
        animation: open-input ease-out;
        animation-duration: 0.5s;
    }
    .search-icon {
        font-size: 1rem;
        padding-left: 0.1rem;
        padding-right: 0.1rem;
    }
    .link-icon {
        animation: rotate-back;
        animation-duration: 0.5s;
    }
    .dateholder {
        background: none;
        margin-bottom: 0.5rem;
        border: none;
        font-weight: 900;
        outline: none;
        font-size: 0.9rem;
        color: var(--blueGreen);
        transform: translate(0px, 5px);
        width: 9rem;
        text-transform: capitalize;
        cursor: default;
        font-family: 'Yeseva One', sans-serif;
    }
    .navbar-nav {
        vertical-align: top !important;
        flex-direction: row !important;
    }
    .navbar-last {
        vertical-align: top !important;
        flex-direction: row !important;
        background: yellow;
        width: 5rem;
    }
    #navbarSupportedContent {
        float: left !important;
    }
    i {
        font-size: 1.2rem;
        color: black;
    }
    .button {
        background: none;
        border: none;
        outline: none;
        font-size: 1rem;
        font-family: 'Yeseva One', sans-serif;
        height: 2.5rem;
    }
    .slider {
        border-top: solid 3px white;
    }
    .button:hover {
        color: var(--mainOrange);
        i {
            color: var(--blueGreen);
        }
        .slider {
            width: 0%;
            animation: widen ease-in 0.4s;
            background: var(--mainOrange);
            border-top: solid 3px var(--mainOrange);
        }
    }
    .navbar-brand-img{
        width: 6rem;
        height: 2.6rem;
        padding: 0.4rem;
    }
    .navbar-brand-img:hover {
        transition:0.5s;
        padding: 0;
    }
    &.no-op{
        background: white;
        transition: 1s !important;
    }
    &.op{
        box-shadow: 0px 4px 2px -2px darkgrey;
        padding-bottom: 1rem;
        transition: 0.5s;
    }
    &.fixed-top{
        background: white;
        transition: 1s !important;
    }
    .navbar-toggler{
        outline: none;
        border: none;
        margin-right: 0;
        margin-left: 0.5rem !important;
    }
    .navbar-toggler:hover{
        .fa-bars{
            color: var(--mainOrange);
            text-shadow: 2px 2px 1px black;
        }
        .fa-times{
            color: var(--mainOrange);
            text-shadow: 2px 2px 1px black;
        }
    }
    .fa-times {
        animation: rotate-back;
        animation-duration: 0.2s;
    }
    .fa-bars, .fa-times {
        color: black;
        padding-left: 2px;
        font-size: 1.5rem;
    }
    @media (min-width: 866px) {
        .first-item {
            margin-left: auto;
        }
        .navbar-nav {
            width: 100%;
        }
    }
    @media (max-width: 866px) {
        .navbar-nav {
            margin-right: 1rem;
        }
        .first-item {
            margin-left: 0.2rem;
        }
    }
    @media (max-width: 576px) {
        &.top-nav {
            display: none;
        }
        .search-bar {
            display: none;
        }
        li {
            margin-left: 0;
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
        .search-item {
            display: none;
        }
    }
    @keyframes text-jump {
        from { transform: translate(0px, 0px); }
        to { transform: translate(0px, -3px); }
    }
    @keyframes widen {
        0% {width: 0%; margin-right: auto}
        50% {width: 100%; margin-right: 0}
        80% {margin-left:auto}
        100% {width: 0%; margin-left: auto}
    }
    @keyframes shorten {

    }
    @keyframes color {
        from {background: white} to {background: var(--mainOrange)}
    }
    @keyframes rotate-back {
        from {transform: rotate(0deg)} to {transform: rotate(360deg)}
    }
    @keyframes open-input {
        from {width: 0rem} to {width: 11rem};
    }
`