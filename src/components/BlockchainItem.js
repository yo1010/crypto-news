import React, { Component } from 'react';
import styled from "styled-components";
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class BlockchainItem extends Component {
    render() {
        const {id, title, publishedOn, readingTime, imageUrl, urlName} = this.props.article;
        return (
                <ProductConsumer>
                    {(value) => {
                        return (
                            <BlockchainItemWrapper className="container" 
                            onClick={() => {value.handleDetail(id)}}>
                                <Link className="article-link" to={`/newsarticle/${urlName}`}>
                                    <div className="row item-container mx-auto">
                                        <div className="img-container col-4 col-md-2 col-lg-2">
                                            <img src={imageUrl} className=""alt="bitcoin dollars altcoins"/>
                                        </div>
                                        <div className="text-container col-12 col-sm-8 col-md-10 col-lg-10">
                                            <div className="text my-3">
                                                <div className="title">{title}</div>
                                            </div>
                                            <div className="row header mx-1">
                                                <div className="metatag"><button className="keyword-btn"><i className="far fa-clock"></i>{readingTime} мин</button></div>
                                                <div className="date ml-auto"><button className="date-btn"><i className="far fa-calendar"></i>{publishedOn}</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </BlockchainItemWrapper>
                        )}}
                </ProductConsumer>
        )
    }
}

const BlockchainItemWrapper = styled.div`
    .item-container {
        animation: show-on-load-blockchain;
        animation-duration: 0.5s;
    }
    &:hover {
        animation: small-jump ease-in;
        animation-duration: 0.2s;
        box-shadow: 0px 0px 4px 3px darkgrey;
    }
    background: white;
    padding-bottom: 1rem;
    box-shadow: 0px 0px 3px 2px darkgrey;
    margin-top: 3rem;
    border-radius: 0.3rem;
    &:hover {
        cursor: pointer;
    }
    .keyword-btn {
        border: none;
        font-size: 0.75rem;
        background: white;
        outline: none;
        font-weight: bold;
        color: var(--blueGreen);
    }
    .metatag {
        margin-bottom: 0.2rem;
    }
    .title {
        font-size: 1rem;
        height: 50px;
        overflow: hidden;
        font-family: 'Yeseva One', sans-serif;
    }
    .container {
        box-shadow: 0px 0px 3px 2px darkgrey;
        border-radius: 0.2rem;
        padding: 0.5rem;
        margin-right: 1rem;
        background: white;
    }
    .container:hover {
        transition: 1s;
        box-shadow: 0px 0px 4px 3px darkgrey;
        .img-container {
            border-bottom: solid 5px var(--blueGreen);
            transition: 0.5s;
        }
    }
    .img-container {
        position: relative;
        overflow:hidden;
        margin-top: 1rem;
        border-bottom: solid 5px var(--mainOrange);
        border-radius: 0.2rem;
        box-shadow: 0px 0px 1px 1px grey;
        text-align: center;
        display: block;
    }
    img {
        filter: grayscale(40%) brightness(80%);
        position: absolute;
        top: -9999px;
        bottom: -9999px;
        left: -9999px;
        right: -9999px;
        margin: auto;
        max-width: 180%;
        max-height: 180%;
    }
    .text {
        overflow: hidden;
    }
    .far {
        margin-right: 3px;
    }
    .header {
        width: 100%;
        text-align: center;
    }
    .article-link {
        text-decoration: none !important;
        color: black;
    }
    .date-btn {
        font-size: 0.75rem;
        color: var(--blueGreen);
        font-weight: bold;
        border: none;
        background: none;
        outline: none;
        cursor: default;
    }
    i {
        font-size: 0.75rem;
    }
    .date {
        margin-right: 0.5rem;
    }
    @media (max-width: 800px) {
        .title {
            font-size: 0.75rem;
        }
    }
    @media (max-width: 585px) {
        .img-container {
            display: none;
        }
        img {
            display: none;
        }
        .title {
            text-align: center;
        }
    }
    @media (max-width: 499px) {
        .text-container {
            width: 100%;
        }
        img {
            display: none;
        }
    }
    @keyframes small-jump {
        0% {transform:translate(0px, 0px)}
        50% {transform:translate(0px, -5px)} 
        100%{transform:translate(0px,0px)}
    }
    @keyframes show-on-load-blockchain {
        from {transform: translate(0px,-100rem)}
        to {transform: translate(0px,0px)}
    }
`