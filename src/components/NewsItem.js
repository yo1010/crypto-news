import React, { Component } from 'react';
import styled from "styled-components";
import img from "../../public/img/news-item.jpg";
import Firebase from '../firebase';
import 'firebase/storage';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class NewsItem extends Component {
    constructor() {
        super();
        this.storage = this.storage = Firebase.storage().ref("flamelink/media");
        this.state = {
            readingTime: 0
        }
    }
    calcReadingTime = () => {
        let arrVal = Object.values(this.props.article);
        let arrString = arrVal.filter(e => typeof e === 'string' && e !== '');
        let totalCоunt = 0;
        let readingTime = 0;
        for (let str in arrString) {
            let wordCount = arrString[str].split(' ').length;
            totalCоunt += wordCount;
        }
        readingTime = Math.round(totalCоunt / 200);
        this.setState({
            readingTime: readingTime
        })
    }
    componentDidMount() {
        this.calcReadingTime();
        window.scrollTo(0,0);
    }
    render() {
        const {id, title, publishedOn, imageUrl} = this.props.article;
        return (
                <ProductConsumer>
                    {(value) => {
                        return (
                            <NewsItemWrapper className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-3" 
                            onClick={() => {value.handleDetail(id)}}>
                                <Link className="article-link" to={`/newsarticle/${title}`}>
                                    <div className="container">
                                        <div className="img-container">
                                            <img src={imageUrl ? imageUrl : img} className="img-fluid"alt="bitcoin dollars altcoins"/>
                                        </div>
                                        <div className="text-container">
                                            <div className="text my-3">
                                                <div className="title">{title}</div>
                                            </div>
                                            <div className="row header mx-1">
                                                <div className="metatag"><button className="keyword-btn"><i className="far fa-clock"></i>{this.state.readingTime} мин</button></div>
                                                <div className="date ml-auto"><button className="date-btn"><i className="far fa-calendar"></i>{publishedOn}</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </NewsItemWrapper>
                        )}}
                </ProductConsumer>
        )
    }
}

const NewsItemWrapper = styled.div`
    animation: show-on-load-left ease-out;
    animation-duration: 2s;
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
        background: white;
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
        animation: small-jump ease-in;
        animation-duration: 0.3s;
        transition: 0.5s;
        box-shadow: 0px 0px 4px 3px darkgrey;
        .img-container {
            border-bottom: solid 5px var(--blueGreen);
            transition: 0.5s;
        }
        .date-btn {
            transition: 1s;
            color: var(--blueGreen);
        }
        .keyword-btn {
            transition: 1s;
            border-color: var(--blueGreen);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        margin-top: 1rem;
        border-bottom: solid 5px var(--mainOrange);
        border-radius: 0.2rem;
        box-shadow: 0px 0px 1px 1px grey;
    }
    img {
        filter: grayscale(40%) brightness(80%);
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
    @media (max-width: 575px) {
        & {
            margin-left: auto;
            margin-right: auto;
        }
    }
    @keyframes small-jump {
        0% {transform:translate(0px, 0px)}
        50% {transform:translate(0px, -5px)} 
        100%{transform:translate(0px,0px)}
    }
    @keyframes show-on-load-left {
        from {transform: translate(-100rem, 0px)}
        to {transform: translate(0px,0px)}
    }
`
