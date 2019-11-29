import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../public/img/Bitcoinia3.png';

export default class Footer extends Component {
    constructor() {
        super();
        this.state = {
            hasScrolled: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll() {
        let topOfPage = window.pageYOffset;
        // Check if it was scrolled back to the top.
        if (topOfPage <= 800) {
            this.setState(() => {
                return {hasScrolled: false}
            })
        } else {
            this.setState(() => {
                return {hasScrolled: true}
            })
        }
    }
    componentDidMount() {
        // Listen on scrolling event, call our function.
        window.addEventListener('scroll', this.handleScroll); 
    }
    componentWillUnmount() {
        // Unlisten if the component unmounts.
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <FooterWrapper>
                <div className={this.state.hasScrolled ? "text" : "text nodisplay"}>Copyright© 2019. <span><img src={logo} alt="Биткойна"/></span> All rights reserved.</div>
                <button className={this.state.hasScrolled ? "scroll-top-btn" : "scroll-top-btn nodisplay"} onClick={() => window.scrollTo(0,0)}><i className="fas fa-chevron-up"></i></button>
            </FooterWrapper>
        )
    }
}


const FooterWrapper = styled.div`
    .nodisplay {
        display: none;
    }
    padding: 0.3rem;
    width:100%;
    background: rgb(248,248,248);
    .text{
        color: black;
        text-align: center;
        font-size: 1rem;
    }
    img {
        height: 30px;
    }
    span {
        padding: 0.5rem;
    }
    .scroll-top-btn {
        position: fixed;
        z-index: 9999;
        border-radius: 5rem;
        background: var(--blueGreen);
        outline: none;
        border: none;
        padding-top: 0.7rem;
        padding-bottom: 0.8rem;
        padding-left: 1rem;
        padding-right: 1rem;
        i {
            color: white;
            font-size: 2rem;
            font-weight: bold;
        }
        bottom: 5%;
        left: 93%;
        animation: rotate-back 0.5s;
    }
    .scroll-top-btn:hover {
        transition: 0.5s;
        transform: scale(1.1);
        background: var(--mainOrange);
    }
    @media (max-width: 1200px) {
        .scroll-top-btn {
            left: 90%;
        }
    }
    @media (max-width: 650px) {
        .scroll-top-btn {
            display: none;
        }
    }
    @keyframes rotate-back {
        from {transform: rotate(0deg)} to {transform: rotate(360deg)}
    }
`