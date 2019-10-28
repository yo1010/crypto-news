import React, { Component } from 'react';
import styled from "styled-components";
import { ProductConsumer } from './context';
import img from '../public/img/news-item.jpg';

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
                        const {title, content, paragraph1, paragraph2, paragraph3, publishedOn, 
                            keyword1, keyword2, keyword3, subtitle1, subtitle2, subtitle3} = value.openNewsItem;
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
                                                    <button className="keyword-btn">#{keyword1}</button>
                                                </div>
                                                <div className="second-keyword">
                                                    <button className="keyword-btn">#{keyword2}</button>
                                                </div>
                                                <div className="third-keyword">
                                                    <button className="keyword-btn">#{keyword3}</button>
                                                </div>
                                            </div>
                                            <div className="social-media mt-3">
                                                <a href="https://www.facebook.com/bitcoinia.ru/" target="_top">
                                                    <button className="button-sm">
                                                        <i className="fab fa-facebook" /></button>
                                                </a>
                                                <button className="button-sm">
                                                    <i className="fab fa-telegram" /></button>
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className="img-container">
                                                <img src={img} className="img-fluid img-thumbnail" alt="news photo"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content mt-5">
                                        <div className="mb-5">{content}</div>
                                        <div className="mb-5 sub-title">{subtitle1}</div>
                                        <div className="mb-5">{paragraph1}</div>
                                        <div className="mb-5 sub-title">{subtitle2}</div>
                                        <div className="mb-5">{paragraph2}</div>
                                        <div className="mb-5 sub-title">{subtitle3}</div>
                                        <div className="mb-5">{paragraph3}</div>
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
    .container {
        padding:1rem;
    }
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
        border: solid 3px var(--mainOrange);
        border-radius: 0.2rem;
        font-size: 1rem;
        background: none;
        outline: none;
        font-weight: bold;
    }
    .sub-title {
        font-weight: bold;
        font-family: 'Yeseva One', sans-serif;
        color: var(--mainOrange);
    }
    @media (min-width: 600px) {
        .keyword-btn:hover {  
            border: solid 3px var(--blueGreen);
            transition: 0.5s;
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        margin-top: 1rem;
        border-bottom: solid 5px var(--mainOrange);
        border-radius: 0.2rem;
        box-shadow: 0px 0px 2px 2px grey;
    }
    img {
        filter: grayscale(40%) brightness(80%);
        border-radius: 0;
    }
    .title {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Yeseva One', sans-serif;
    }
    .content {
        font-family: 'Arsenal', serif;
        margin-bottom: 4rem;
    }
    .row {
        width: 100%;
    }
    .date {
        color: var(--mainOrange);
        font-size: 1rem;
        margin-bottom: 0.5rem;
        margin-top:1rem;
    }
    .far {
        font-size: 1.2rem;
    }
    .button-sm {
        background: none;
        border: none;
        outline: none;
    }
    .button-sm: hover {
        color: var(--mainOrange);
    }
    .fab {
        font-size: 1.5rem;
    }
    @media (max-width: 502px) {
        .title {
            font-size: 1rem;
        }
        .keyword-btn {
            font-size: 0.75rem;
        }
    }
`

