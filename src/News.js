import React, { Component } from 'react';
import styled from "styled-components";
import NewsItem from "./NewsItem";
import { ProductConsumer } from './context';

export default class News extends Component {
    render() {
        return (
            <NewsWrapper className="mb-5">
                <div className="row">
                    <div className="separator1"></div>
                    <div className="separator2">
                        <button className="title-separator text-capitalize px-1">more news:</button>
                        <div className="smallseparator"></div>
                    </div>
                </div>
                <div className="row mx-auto">
                    <ProductConsumer>
                        {(value) => {
                            return value.news.map(
                                article => {
                                    return <NewsItem key={article.id}
                                            article={article} />
                                }
                            )
                        }}
                    </ProductConsumer>
                </div>
            </NewsWrapper>
        )
    }
}

const NewsWrapper = styled.div`
.container {
    width: 100%;
}
.separator1{
    background: red;
    width: 10%;
    height: 1.8rem;
}
.separator2{
    background:red;
    width: 90%;
    height: 1.8rem;
}
.title-separator{
    font-weight: bold;
    font-size: 1.5rem;
    background: white;
    border: solid 0.5rem red;
    border-bottom: none;
    transform: translate(0px, -1.12rem);
    outline: none;
}

@media (max-width: 499px) {
    .title-separator{
        font-size: 1.6rem;
    }
}
`
