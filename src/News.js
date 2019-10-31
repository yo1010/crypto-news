import React, { Component } from 'react';
import styled from "styled-components";
import NewsItem from "./NewsItem";
import { ProductConsumer } from './context';

export default class News extends Component {
    render() {
        return (
            <NewsWrapper>
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
background: rgb(248,248,248);
padding-bottom: 3rem;
.container {
    width: 100%;
}
.separator1{
    background: var(--mainOrange);
    width: 10%;
    height: 2.4rem;
}
.separator2{
    background:var(--mainOrange);
    width: 90%;
    height: 2.4rem;
}
.title-separator{
    font-weight: bold;
    font-size: 1.5rem;
    border: none;
    transform: translate(0px, 0px);
    background: rgb(248,248,248);
    outline: none;
    padding-bottom: 10px;
    font-family: 'Yeseva One', sans-serif;
}

@media (max-width: 499px) {
    .title-separator{
        font-size: 1.6rem;
    }
}
`
