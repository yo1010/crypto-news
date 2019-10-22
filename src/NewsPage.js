import React, { Component } from 'react';
import styled from "styled-components";
import { ProductConsumer } from './context';
import img from '../public/img/top-news.jpg';
import News from './News';

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
                                    <div className="row">
                                        <div className="text-container col-6">
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
                                        <div className="img-container col-6">
                                            <img src={img} className="img-fluid img-thumbnail"alt="news photo"/>
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
                <News/>
            </React.Fragment>
        )
    }
}

const NewsPageWrapper = styled.div`
    margin-top: 5rem;
    .container > * {
        margin-top: 2rem;
    }
    .title {
        font-size: 3rem;
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
`

