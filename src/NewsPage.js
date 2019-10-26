import React, { Component } from 'react';
import styled from "styled-components";
import { ProductConsumer } from './context';
import img from '../public/img/top-news.jpg';

export default class NewsPage extends Component {
    componentDidUpdate() {
        window.scrollTo(0, 0);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <ProductConsumer>
                    {(value) => {
                        const {title, content, publishedOn} = value.openNewsItem;
                        return (
                            <NewsPageWrapper>
                                <div className="container mx-auto">
                                    <div className="row mx-auto">
                                        <div className="text-container col-5">
                                            <div className="date">
                                                <span className="icon-container mr-1"><i className="far fa-calendar-alt"></i></span>{publishedOn}
                                            </div>
                                            <div className="title">
                                                {title}
                                            </div>
                                            <div className="keywords row">
                                                <div className="first-keyword">
                                                    <button className="keyword-btn">#bitcoin-news</button>
                                                </div>
                                                <div className="second-keyword">
                                                    <button className="keyword-btn">#blockchain </button>
                                                </div>
                                                <div className="third-keyword">
                                                    <button className="keyword-btn">#crime</button>
                                                </div>
                                            </div>
                                            <div className="social-media mt-3">
                                                <button className="button-sm">
                                                    <i className="fab fa-telegram" /></button>
                                                <button className="button-sm">
                                                    <i className="fab fa-facebook" /></button>
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className="img-container">
                                                <img src={img} className="img-fluid img-thumbnail"alt="news photo"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        {content}
                                    </div>
                                </div>
                            </NewsPageWrapper>
                        )
                    }}
                </ProductConsumer>
            </React.Fragment>
        )
    }
}

const NewsPageWrapper = styled.div`
    margin-top: 9rem;
    margin-bottom: 4rem;
    .container > * {
        margin-top: 2rem;
    }
    .keywords {
        margin-top:0.5rem;
        margin-left: 0.1rem;
    }
    .keyword-btn {
        margin-top: 0.5rem;
        margin-right: 0.5rem;
        border: solid 3px red;
        border-radius: 0.2rem;
        font-size: 1rem;
        background: none;
        outline: none;
    }
    .keyword-btn:hover {
        font-size: 1.1rem;   
        border: solid 3px green;
        transition: 0.5s;
    }
    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        margin-top: 1rem;
        border-bottom: solid 5px red;
        border-radius: 0.2rem;
        box-shadow: 0px 0px 2px 2px grey;
    }
    .title {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Yeseva One', sans-serif;
    }
    .content {
        font-family: 'Arsenal', serif;
    }
    .row {
        width: 100%;
    }
    .date {
        color: red;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        margin-top:1rem;
    }
    .button-sm {
        background: none;
        border: none;
    }
    .button-sm: hover {
        color: red;
    }
    i {
        font-size: 1.5rem;
    }
    @media (max-width: 502px) {
        .title {
            font-size: 2rem;
        }
    }
`

