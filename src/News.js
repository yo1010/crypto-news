import React, { Component } from 'react';
import styled from "styled-components";
import NewsItem from "./NewsItem";
import { ProductConsumer } from './context';

export default class News extends Component {
    render() {
        return (
            <NewsWrapper className="my-5">
                <div className="row">
                    <div className="separator1"></div>
                    <div className="separator2">
                        <button className="title-separator text-capitalize px-1">more news:</button>
                        <div className="smallseparator"></div>
                    </div>
                </div>
                <div className="container">
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
    height: 1rem;
}
.separator2{
    background:red;
    width: 90%;
    height: 1rem;
}
.title-separator{
    font-weight: bold;
    font-size: 1.5rem;
    background: white;
    border: none;
    transform: translate(0px, -12px);
}
`
