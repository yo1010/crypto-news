import React, { Component } from 'react';
import styled from "styled-components";
import img from '../public/img/top-news.jpg';
import News from './News';

export default class TopNews extends Component {
    componentDidUpdate() {
        window.scrollTo(0, 0);
        console.log('it updated')
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        console.log('it updated')
    }
    render() {
        return (
            <React.Fragment>
                <NewsContainer>
                    <div className="container">
                        <div className="row mx-auto">
                            <div className="img-column mx-auto col-10 col-md-6 col-lg-6">
                                <button className="btn-danger">Top News</button>
                                <img src={img} className="img img-thumbnail" alt="top-news"/>
                            </div>
                            <div className="text-column mx-auto col-10 col-md-6 col-lg-6">
                                <div className="text-container scrollbar-danger">
                                    <h3 className="heading text-capitalize">
                                        news title
                                    </h3>
                                    <h5 className="text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </NewsContainer>
                <News/>
            </React.Fragment>
        )
    }
}

const NewsContainer = styled.div`
    margin-right: 0.8rem;
    margin-top: 5rem;
    border-bottom-color: red;
    border-bottom-width: 1rem;
    .btn-danger {
        position: absolute;
        z-index: 1;
        bottom: 70%;
        font-size: 2rem;
        background: red !important;
    }
    .container {
        padding: 1rem;
    }
    .text-container {
        overflow-y: scroll;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    .heading {
        margin-top: 0.5rem;
    }
    .img-column {
        position: relative;
        border-width: 5px;
        border-color: red;
        margin-right: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .text {
        postion: absolute !important;
        margin-right: 0.5rem;
    }
    img {
        width:100%;
    }
    .scrollbar-danger::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #F5F5F5;
    border-radius: 10px; }
    .scrollbar-danger::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5; }
    .scrollbar-danger::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: red; }

    @media (max-width: 767px) {
        .title {
            margin: 3rem;
        }
    }
    @meida (min-width: 767px) {
        .title {
            margin: 2rem;
        }
    }
    @media (max-width: 768px) {
        .text-container {
            height: 295px;
        }
    }
    @media (min-width: 768px) and (max-width: 992px) {
        .text-container {
            height: 236px;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px) {
        .text-container {
            height: 326px;
        }
    }
    @media (min-width: 1200px) {
        .text-container {
            height: 393px;
        }
    }
`