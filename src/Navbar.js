import React, { Component } from 'react';
import styled from "styled-components";
import logo from '../public/img/Bitcoinia3.png';
import CurrentDate from './CurrentDate';
import {ProductConsumer} from './context';
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
        console.log(this.state.inputValue);
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
                                        data-mcurrency="rub" data-bcolor="#fff" 
                                        data-scolor="#333" data-ccolor="#428bca" data-pcolor="#428bca"></div>
                                    </div>
                                </div>
                            </div>
                            <NavWrapper className="top-nav">
                                <ul className="navbar-nav icon-nav">                                                                                 
                                    <li className="text-capitalize nav-item ml-auto">
                                        <a href="https://www.facebook.com/bitcoinia.ru/" target="_top">
                                            <button className="button p-1">
                                            <i className="fab fa-facebook icon-sm" />
                                            </button>
                                        </a>
                                    </li>
                                    <li className="text-capitalize nav-item mr-2">
                                        <button className="button p-1">
                                            <i className="fab fa-telegram icon-sm" /></button></li>
                                </ul>
                            </NavWrapper>
                            <NavWrapper className={this.state.hasScrolled ? 
                                'navbar op navbar-expand-lg navbar-dark' : 
                                'no-op navbar navbar-expand-lg navbar-dark'}>
                                <Link to="/">
                                    <div className="navbar-brand" onClick={() => this.scrollTop()}>
                                        <img src={logo} alt="logo" className="navbar-brand-img"/>
                                    </div>
                                </Link>
                                <button className="navbar-toggler" type="button" data-target="#navbarSupportedContent" 
                                aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className={this.state.toggle ? "fas fa-times":"fas fa-bars"}></i>
                                </button>
                                <div className={this.state.toggle ? "navbar-collapse" :
                                    "navbar-collapse collapse"}  id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="text-capitalize nav-item ml-1 py-1">
                                            <Link to="/">
                                                <button className="button" onClick={() => this.scrollTop()}>
                                                    <div className="slider mx-auto"/>
                                                    Новости</button>
                                            </Link>
                                        </li>
                                        <li className="text-capitalize nav-item ml-1 py-1">
                                            <Link to="/bitcoin-news">
                                                <button className="button" onClick={() => this.scrollTop()}>
                                                    <div className="slider mx-auto"/>
                                                    Биткойн</button>
                                            </Link>
                                        </li>
                                        <li className="text-capitalize nav-item ml-1 py-1">
                                            <Link to="/blockchain-news">
                                                <button className="button" onClick={() => this.scrollTop()}>
                                                    <div className="slider mx-auto"/>
                                                    Блокчейн</button>
                                            </Link>
                                        </li>
                                        <li className="text-capitalize nav-item ml-1 py-1">
                                            <Link to="/crypto-dictionary">
                                                <button className="button" onClick={() => this.scrollTop()}>
                                                    <div className="slider mx-auto"/>
                                                    <span className="orange">Dictionary</span></button>
                                            </Link>
                                        </li>
                                        <li className="text-capitalize nav-item ml-auto py-1">
                                            <CurrentDate /></li> 
                                        <li className="nav-item search-item mr-3">
                                            <div className="search-bar row">
                                                <button className={this.state.hideSearch ? "btn-search button hiddenInput" : "btn-search button"} onClick={()=>{
                                                    this.hasClicked();
                                                    }}>
                                                    <i className="fas fa-search search-icon pt-1"></i></button>
                                                <form className="form-inline my-lg-0">
                                                        <Link to="/search-results" className={!this.state.inputValue ? "disabled-link" : ""}>
                                                            <button className={this.state.hideSearch ? "btn-search button" : "btn-search button hiddenInput"} type="submit" onClick={()=>{
                                                                value.handleSearch(this.state.inputValue);
                                                                this.clearInputValue();
                                                                this.hasntClicked();
                                                                }}>
                                                                <i className="fas fa-search search-icon pt-1"></i></button>
                                                        </Link>
                                                        <input value={this.state.inputValue} className={this.state.hideSearch ? "form-control" : "form-control hiddenInput"} 
                                                        onChange={this.updateInputValue} type="search" placeholder="Search News" aria-label="Search"/>
                                                </form>
                                                <button className={this.state.hideSearch ? "btn-search button" : "btn-search button hiddenInput"} onClick={()=>{
                                                    this.hasntClicked();
                                                    }}>
                                                    <i className="fas fa-times search-icon pt-1"></i></button>
                                            </div>
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
    background:white;
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
        padding: 0;
        border-radius: 1.5rem;
        flex-direction: row !important;
        border: solid 2px var(--mainOrange);
    }
    .form-control {
        transition: 1s;
    }
    .search-icon {
        font-size: 1.2rem;
    }
    .coinlore-priceticker-widget {
        border-none;
    }
    .header {
        margin-top: 7rem;
    }
    .dateholder {
        background: none;
        border: none;
        font-weight: 900;
        outline: none;
        font-size: 0.9rem;
        color: var(--mainOrange);
        transform: translate(0px, 5px);
        height: 1.5rem;
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
        width: 100%;
        border-top: solid 3px white;
    }
    .button:hover {
        color: var(--mainOrange);
        i {
            color: var(--mainOrange);
        }
        .slider {
            animation: widen 0.5s;
            width: 100%;
            backgroun: var(--mainOrange);
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
            color: var(--mainOrange);
            text-shadow: 2px 2px 1px black;
        }
        .fa-times{
            color: var(--mainOrange);
            text-shadow: 2px 2px 1px black;
        }
    }
    .fa-bars, .fa-times {
        color: black;
        padding-left: 2px;
        font-size: 1.5rem;
    }
    @media (min-width: 768px) {
        .navbar-nav {
            width: 100%;
        }
    }
    @media (max-width: 900px) {
        navbar-toggler {
            margin-left: auto;
        }
    }
    @media (max-width: 576px) {
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
        .navbar-nav > * {
            margin-top: 0.5rem;
        }
        .dateholder {
            display: none;
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
        from {width: 0%} to {width: 100%}
    }
    @keyframes shorten {
        from {width: 100%} to {width: 0%}
    }
`