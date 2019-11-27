import React, { Component } from 'react';
import styled from "styled-components";
import NewsItem from "./NewsItem";
import { ProductConsumer } from '../context';
import LazyLoad from 'react-lazyload';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            hasloaded: false,
            hasScrolled: false,
        }   
    };
    handleScroll = () => {
        let scrolled = window.pageYOffset;
        if (scrolled < 750) {
            this.setState(() => {
                return {hasScrolled: false}
            })
        } else {
            this.setState(() => {
                return {hasScrolled: true}
            })
        }
    }
    componentDidMount() {
        // Listen on scrolling event, call our function.
        window.addEventListener('scroll', this.handleScroll); 
        window.scrollTo(0,0)
    }
    componentWillUnmount() {
        // Unlisten if the component unmounts.
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <NewsWrapper>
                <div className="row">
                    <div className="separator1"></div>
                    <div className="separator2">
                        <button className="title-separator text-capitalize px-1">все новости:</button>
                        <div className="smallseparator"></div>
                    </div>
                </div>
                <div className="row mx-auto">
                    <ProductConsumer>
                        {(value) => {
                            let newsLeftArray = value.newsLeft.slice(3);
                            return newsLeftArray.map(
                                article => {
                                    return  (
                                        <LazyLoad offset={50}>
                                            <NewsItem key={article.id}
                                                article={article} />
                                        </LazyLoad>
                                    )
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
.notloaded {
    display: none;
}
animation: show-on-load-left ease-out;
animation-duration: 1s;
background: rgb(248,248,248);
padding-bottom: 3rem;
.scroll-top-btn {
    position: fixed;
    z-index: 9999;
    border-radius: 0.5rem;
    background: var(--blueGreen);
    .i {
        color: white;
    }
    bottom: 10%;
    left: 90%;
}
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
        font-size: 1.3rem;
        transform: translate(0px, 0px);
        padding-top: 5px;
    }
}
`