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
        console.log('it updated')
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
                                                {publishedOn}
                                            </div>
                                            <div className="title">
                                                {title}
                                            </div>
                                            <div className="social-media">
                                                <button className="button">
                                                    <i className="fab fa-telegram" /></button>
                                                <button className="button">
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
    }
    .row {
        width: 100%;
    }
    .date {
        color: red;
    }
    button {
        background: none;
        border: none;
    }
    button: hover {
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

