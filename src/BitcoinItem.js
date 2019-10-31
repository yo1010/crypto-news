import React, { Component } from 'react';
import styled from "styled-components";
import img from '../public/img/bitcoin-img.jpg';
import {ProductConsumer} from './context';
import {Link} from 'react-router-dom';

export default class BitcoinItem extends Component {
    render() {
        const {id, title, publishedOn} = this.props.article;
        return (
                <ProductConsumer>
                    {(value) => {
                        return (
                            <BitcoinItemWrapper className="container" 
                            onClick={() => {value.handleBitcoinDetail(id)}}>
                                <Link className="article-link" to={`/newsarticle/${title}`}>
                                    <div className="row">
                                        <div className="img-container col-4 col-md-2 col-lg-2">
                                            <img src={img} className=""alt="bitcoin dollars altcoins"/>
                                        </div>
                                        <div className="text-container col-8 col-md-10 col-lg-10">
                                            <div className="text my-3">
                                                <div className="title">{title}</div>
                                            </div>
                                            <div className="row header mx-1">
                                                <div className="metatag"><button className="keyword-btn">#news</button></div>
                                                <div className="date ml-auto"><button className="date-btn"><i className="far fa-calendar"></i>{publishedOn}</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </BitcoinItemWrapper>
                        )}}
                </ProductConsumer>
        )
    }
}

const BitcoinItemWrapper = styled.div`
    margin-top: 3rem;
    border-radius: 0.3rem;
    &:hover {
        cursor: pointer;
    }
    .keyword-btn {
        border: solid 2px var(--mainOrange);
        border-radius: 0.2rem;
        font-size: 0.75rem;
        outline: none;
    }
    .metatag {
        margin-bottom: 0.2rem;
    }
    .title {
        font-size: 0.75rem;
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
        img-width: 110%;
        img-height: 110%;
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
        color: var(--mainOrange);
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
    @media (max-width: 499px) {
        .keyword-btn {font-size:0.5rem;}
        .date-btn {
            font-size:0.5rem;
            font-weight: bold;
        }
    }
`