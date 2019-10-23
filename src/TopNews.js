import React, { Component } from 'react';
import styled from "styled-components";
import img from '../public/img/top-news.jpg';
import {ProductConsumer} from './context';
import SecondaryNews from './SecondaryNews';
import TertiaryNews from './TertiaryNews';
import {Link} from 'react-router-dom';
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
            <ProductConsumer>
                {value => {
                    const {id, title, content, publishedOn} = value.topNews[0];
                    return (
                        <React.Fragment>
                            <NewsContainer>
                                <div className="container">
                                    <div className="row mx-auto">
                                        <div className="img-column mx-auto col-10 col-md-8 col-lg-8"
                                        onClick={() => {value.handleTopDetail(id)}}>
                                            <Link className="article-link" to={`/newsarticle/${id}`}>
                                                <div className="header">{publishedOn}</div>
                                                <div className="img-column-one mx-auto">
                                                    <button className="btn-danger">Top News</button>
                                                    <div className="img-container">
                                                        <img src={img} className="img-fluid" alt="top-news"/>
                                                    </div>
                                                    <div className="text-column">
                                                        <div className="text-container mx-auto">
                                                            <h3 className="heading text-capitalize">
                                                                {title}
                                                            </h3>
                                                            <h5 className="text">
                                                                {content}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="img-column-two display-lg mx-auto col-10 col-md-4 col-lg-4">
                                                    <div className="editors-choice text-capitalize mx-auto">
                                                        <SecondaryNews/>
                                                        <TertiaryNews/>
                                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </NewsContainer>
                        </React.Fragment>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const NewsContainer = styled.div`
    overflow-x: hidden;
    width: 100%;
    border-top: solid 5px red;
    background: lightgrey;
    margin-right: 0.8rem;
    margin-top: 7rem;
    border-bottom-color: red;
    border-bottom-width: 1rem;
    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        margin-top: 1rem;
    }
    .btn-danger {
        position: absolute;
        z-index: 1;
        bottom: 70%;
        font-size: 2rem;
        background: red !important;
        outline: none;
    }
    .editors-choice {
        margin-top: 1rem;
        text-align: center;
    }
    .btn-danger-sm {
        position: absolute;
        z-index: 1;
        bottom: 70%;
        font-size: 1.5rem;
        background: red !important;
        color: white;
        outline: none;
    }
    .text-container {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    h5 {
        marging-bottom: 0.5rem;
    }
    .heading {
        margin-top: 0.5rem;
    }
    .heading-sm {
        margin-top: 0.5rem;
        color: red;
    }
    .img-sm {
        position: relative;
    }
    .img-sm-two {
        position: relative;
        margin-top: 1.2rem;
    }
    .second-image {
        margin-top: 1.3rem;
    }
    .text-column {
        overflow: hidden;
        width: 100%;
        position: absolute;
        bottom: 0%;
        color: white;
        padding: 1rem;
        height: 40%;
        margin-bottom: 0.5rem;
    }
    .text-column-sm {
        overflow: hidden;
        width: 100%;
        position: absolute;
        bottom: -3%;
        color: white;
        padding: 1rem;
        height: 40%;
        margin-bottom: 0.5rem;
        background: rgba(0,0,0, 0.6);
    }
    .container {
        padding: 1rem;
    }
    .img-column {
        position: relative;
        border-width: 5px;
        border-color: red;
        margin-right: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .img-column-one {
        position: relative;
        border-width: 5px;
        border-color: red;
        margin-right: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        box-shadow: 0px 0px 2px 2px grey;
    }
    .img-column-two {
        position: relative;
        border-width: 5px;
        border-color: red;
        margin-right: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .img-sm-column {
        box-shadow: 0px 0px 2px 2px grey;
    }
    img:hover {
        transition: 1s;
        transform: scale(1.3);
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
        .display-lg{
            display: none;
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