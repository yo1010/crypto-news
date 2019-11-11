import React, { Component } from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../context';
import img from '../../public/img/news-item.jpg';

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
                        const {title, content, paragraph1, paragraph2, paragraph3, paragraph4,
                            paragraph5, publishedOn, keyword1, keyword2, keyword3, subtitle1,
                            subtitle2, subtitle3, subtitle4, subtitle5, imageUrl} = value.openNewsItem;
                        console.log(value.openNewsItem)
                        return (
                            <NewsPageWrapper>
                                <div className="container mx-auto">
                                    <div className="row mx-auto">
                                        <div className="col-12">
                                            <div className="row header">
                                                <div className="date">
                                                    <span className="icon-container mr-1"><i className="far fa-calendar-alt"></i></span>{publishedOn}
                                                </div>
                                                <div className="social-media mt-3 ml-auto">
                                                    <a href="https://www.facebook.com/bitcoinia.ru/" target="_top">
                                                        <button className="button-sm">
                                                            <i className="fab fa-facebook" /></button>
                                                    </a>
                                                    <a href="https://t.me/bitcoiniaru" target="_top">
                                                        <button className="button-sm">
                                                            <i className="fab fa-telegram" /></button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-container col-12 mt-1 border-container">
                                            <div className="title mt-1">
                                                {title}
                                            </div>
                                        </div>
                                        <div className="col-12 mt-1">
                                            <div className="img-container">
                                                <img src={imageUrl ? imageUrl : img} className="img-fluid" alt="news photo"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container content">
                                        <div className="mb-3">{content}</div>
                                        <div className="mb-3 sub-title">{subtitle1}</div>
                                        <div className="mb-3">{paragraph1}</div>
                                        <div className="mb-3 sub-title">{subtitle2}</div>
                                        <div className="mb-3">{paragraph2}</div>
                                        <div className="mb-3 sub-title">{subtitle3}</div>
                                        <div className="mb-3">{paragraph3}</div>
                                        <div className="mb-3 sub-title">{subtitle4}</div>
                                        <div className="mb-3">{paragraph4}</div>
                                        <div className="mb-3 sub-title">{subtitle5}</div>
                                        <div className="mb-3">{paragraph5}</div>
                                        <div className="keywords row mb-2">
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
    .border-container {
        border-top: solid 5px var(--mainOrange);
        border-radius: 0.2rem;
    }
    .header {
        margin-left: 0.1rem;
    }
    .keywords {
        margin-top:0.5rem;
        margin-left: 0.1rem;
        font-family: "Yeseva One", sans-serif;
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
        cursor: default;
    }
    .sub-title {
        font-weight: bold;
        font-family: 'Yeseva One', sans-serif;
        color: var(--mainOrange);
    }
    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        margin-top: 1rem;
        border-bottom: solid 5px var(--mainOrange);
        border-bottom-left-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
    }
    img {
        filter: grayscale(40%) brightness(80%);
        border-radius: 0;
    }
    .title {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Yeseva One', sans-serif;
        text-align: center;
    }
    .content {
        font-family: 'Arsenal', serif;
        margin-bottom: 2rem;
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

