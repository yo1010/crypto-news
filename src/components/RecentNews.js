import React, { Component } from 'react';
import styled from "styled-components";
import TopNewsItem from "./TopNewsItem";
import { ProductConsumer } from '../context';

export default class RecentNews extends Component {
    constructor() {
        super();
        this.state = {
            hasloaded: false
        }   
    };
    render() {
        return (
            <NewsWrapper>
                <div className="outter-container">
                    <div className="separator-big mx-auto mb-2"/>
                    <div className="row mx-auto container-rn">
                        <ProductConsumer>
                            {(value) => {
                                let firstNews = value.newsLeft.slice(0,8)
                                return firstNews.map(
                                    article => {
                                        return  (
                                            <TopNewsItem key={article.id}
                                                article={article} />
                                        )
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
    width: 100%;
    margin-top: 1rem;
    padding: 0;
    text-align: center;
    .separator-big {
        border: solid 3px var(--blueGreen);
        width: 80%;
    }
    .notloaded {
        display: none;
    }
    animation: show-on-load-left ease-out;
    animation-duration: 1s;
    .container {
        width: 100%;
    }
    .outter-container {
        margin: 0 auto;
    }
    .container-rn > * {
        margin-left: auto !important;
        margin-right: auto !important;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        .h1-ni, .title-ni, h1 {
            text-shadow: none !important;
        }
    }
`