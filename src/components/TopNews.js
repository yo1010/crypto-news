import React, { Component } from 'react';
import styled from "styled-components";
import {ProductConsumer, ProductContext} from '../context';
import img from '../../public/img/top-news.jpg';
import imgBg from '../../public/img/bitcoin.png';
import {Link} from 'react-router-dom';
import EditorNews from './EditorNews';
import MostReadNews from './MostReadNews';

export default class TopNews extends Component {
    constructor() {
        super();
        this.urlArray = [];
        this.refNames = [];
        this.finalUrls = [];
        this.firstUrl = "";
        this.imgNames = [];
        this.state = {
            slideIndex: 0,
            imgArr: [],
            firstUrl: "",
            firstNews: {},
            finalUrls: [],
            urlName: "",
            hasloaded: false
        };
        this.plusSlides=this.plusSlides.bind(this);
        this.minusSlides=this.minusSlides.bind(this);
        this.currentSlide=this.currentSlide.bind(this);
        this.handleLoad=this.handleLoad.bind(this);
    }
    plusSlides(n) {
        let slideIndex = this.state.slideIndex;
        if (slideIndex > 2) {
            this.setState(() => {
                return {slideIndex: 0}
            })
        } else {
            this.setState(() => {
                return {slideIndex: slideIndex + n}
            })
        }
    }
    minusSlides(n) {
        let slideIndex = this.state.slideIndex;
        if (slideIndex < 1) {
            this.setState(() => {
                return {slideIndex: 3}
            })
        } else {
            this.setState(() => {
                return {slideIndex: slideIndex - n}
            })
        }
    }
    currentSlide(n) {
        this.setState(() => {
            return {slideIndex: n}
        })
    }
    handleLoad() {
        console.log('has loaded')
        this.setState({
            hasloaded: true
        })
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, title, publishedOn, readingTime, imageUrl} = value.topNews[this.state.slideIndex] ? 
                        value.topNews[this.state.slideIndex] : value.topNews[0];
                    return (
                        <NewsContainer className={this.state.hasloaded ? "row mx-auto mb-1" : "row mx-auto mb-1 notloaded"}>
                            <div className={this.state.hasloaded ? "img-column mx-auto col-12 col-md-8 col-lg-8" : "img-column mx-auto col-12 col-md-8 col-lg-8 notloaded"}
                            onClick={() => {value.handleDetail(id)}}>
                                <Link className="article-link" to={`/newsarticle/${title}`}>
                                    <div className="img-column-one mx-auto">
                                        <button className="btn-danger text-capitalize">
                                            последние новости</button>
                                        <div className="img-container">
                                                <img src={imageUrl} className="img-fluid img-main" alt="top-news"/>
                                            <div className="img-container-second">
                                            </div>
                                        </div>
                                        <div className="text-column">
                                            <div className="text-container mx-auto">
                                                <p className="heading text-capitalize">
                                                    {title}
                                                </p>
                                                <div className="row date-minutes">
                                                    <div className="heading text ml-3">
                                                        {publishedOn}
                                                    </div>
                                                    <div className="heading text ml-5">
                                                        {readingTime} мин чтение
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <button className="prev btn-slide" onClick={()=>this.minusSlides(1)}>
                                    <i className="fas fa-chevron-left arrow"></i></button>
                                <button className="next btn-slide" onClick={()=>this.plusSlides(1)}>
                                    <i className="fas fa-chevron-right arrow"></i></button>
                                <div className="dots">
                                    <span className={this.state.slideIndex === 0 ? "active dot" : "dot"} 
                                    onClick={()=>this.currentSlide(0)}></span>
                                    <span className={this.state.slideIndex === 1 ? "active dot" : "dot"} 
                                    onClick={()=>this.currentSlide(1)}></span>
                                    <span className={this.state.slideIndex === 2 ? "active dot" : "dot"} 
                                    onClick={()=>this.currentSlide(2)}></span>
                                    <span className={this.state.slideIndex === 3 ? "active dot" : "dot"} 
                                    onClick={()=>this.currentSlide(3)}></span>
                                </div>
                            </div>
                            <div className={this.state.hasloaded ? "img-column-two mx-auto col-10 col-md-4 col-lg-4" 
                                : "img-column-two mx-auto col-10 col-md-4 col-lg-4 notloaded"}>
                                    <EditorNews/>
                                    <MostReadNews handleLoad={this.handleLoad}/>
                            </div>
                            <div className={this.state.hasloaded ? "container notloaded" : "container"}>
                                <img src={imgBg} className="img-fluid loading-img"/>
                            </div>
                        </NewsContainer>
                    )
                }}
            </ProductConsumer>
        )
    }
}
TopNews.contextType = ProductContext;

const NewsContainer = styled.div`
    .notloaded {
        display: none;
    }
    padding: 1rem;
    width: 100%;
    margin-right: 0.8rem;
    margin-top: 5.5rem;
    border-bottom-color: var(--mainOrange);
    border-bottom-width: 1rem;
    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        margin-top: 1rem;
    }
    .img-container-second {
        z-index: -1;
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: 0%;
        background-image: url(${imgBg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .loading-img {
        animation: spin;
        animation-duration: 1.5s;
    }
    .img-container-sm {
        background-image: url(${imgBg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .img-main {
        filter: grayscale(40%) brightness(80%);
    }
    .actual-img-sm {
        filter: grayscale(40%) brightness(80%);
    }
    .img-bg {
        opacity: 0.0;
    }
    .img-column {
        animation: show-on-load;
        animation-duration: 0.5s;
    }
    .img-column-one:hover {
        img {
            transition: 1s;
            transform: scale(1.3);
        }
    }
    .btn-slide {
        cursor: pointer;
        position: absolute;
        top:45%;
        color: var(--blueGreen);
        font-weight: bold;
        transition: 0.6s ease;
        border: none;
        user-select: none;
        z-index: 3;
        background: none;
        outline: none;
    }
    .prev {
        left: 1.2rem;
        padding-left: 0;
    }
    .next {
        right: 1.2rem;
        padding-right: 0;
    }
    .btn-slide:hover {
        color: var(--mainOrange);
        text-shadow: 2px 2px 2px black;
        animation: text-jump 0.2s;
        animation-iteration-count: 3;
    }
    .arrow {
        font-size: 3rem;
    }
    .dots {
        position: absolute;
        top: 99%;
        width:90%;
        text-align: center;
        background: none;
        z-index: 3;
    }
    .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: black;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
        z-index: 4;
    }
    .active, .dot: hover {
        background-color: var(--mainOrange);
    }
    .btn-danger {
        position: absolute;
        z-index: 1;
        bottom: 70%;
        font-size: 2rem;
        background: var(--mainOrange) !important;
        outline: none;
        border: var(--mainOrange) !important;
        font-family: 'Yeseva One', sans-serif;
        border-top-right-radius: 0.4rem;
    }
    .editors-choice {
        margin-top: 1rem;
        text-align: center;
    }
    .text-container {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    h5 {
        marging-bottom: 0.5rem;
    }
    .heading {
        margin-top: 0.5rem;
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Arsenal', sans-serif;
        text-shadow: 1px 1px black;
    }
    .text {
        font-size: 1.2rem;
        color: var(--mainOrange);
    }
    .heading-sm {
        margin-top: 0.5rem;
        color: var(--mainOrange);
        font-size: 1rem;
    }
    .img-sm {
        position: relative;
    }
    .img-sm-two {
        position: relative;
        margin-top: 1.2rem;
    }
    .second-image {
        margin-top: 1.25rem;
    }
    .text-column {
        overflow: hidden;
        width: 100%;
        position: absolute;
        bottom: 0%;
        color: white;
        padding: 1rem;
        height: 40%;
        margin-bottom: 0.5rem;
    }
    .editor-title {
        overflow: hidden;
        width: 100%;
        position: absolute;
        bottom: -4%;
        color: white;
        padding: 1rem;
        height: 100%;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        font-weight: bold;
        text-shadow: 0.5px 0.5px black;
    }
    .img-column {
        position: relative;
        border-width: 5px;
        border-color: var(--mainOrange);
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .img-column-one {
        position: relative;
        border-width: 5px;
        border-color: var(--mainOrange);
        margin-top: 1rem;
        margin-bottom: 1rem;
        box-shadow: 0px 0px 2px 2px black;
    }
    .img-column-two {
        position: relative;
        border-width: 5px;
        border-color: var(--mainOrange);
        margin-top: 1rem;
        margin-bottom: 1rem;
        animation: show-on-load;
        animation-duration: 0.5s;
    }
    .img-sm-column {
        box-shadow: 0px 0px 2px 2px black;
    }
    .img-sm-column:hover {
        img {
            transition: 1s;
            transform: scale(1.3);
        }
    }
    img:hover {
        transition: 1s;
        transform: scale(1.3);
    }
    .fade {
        opacity: 1;
        animation-name: fade;
        animation-duration: 1.5s;
    }
    @keyframes fade {
        from {opacity: 0.4} to {opacity: 1}
    }
    @media (min-width: 767px) {
        .title {
            margin: 2rem;
        }
    }
    @media (max-width: 768px) {
        .text-container {
            height: 295px;
            font-size: 1rem;
        }
        .display-lg{
            display: none;
        }
        .img-column-two {
            display: none;
        }
        .heading {
            font-size: 1.3rem;
        }
        .title {
            margin: 3rem;
        }
        .btn-danger {
            font-size: 2rem;
        }
    }
    @media (max-width: 680px) {
        .heading {
            font-size: 1.1rem;
        }
        .btn-danger {
            font-size: 1.5rem;
        }
        .text-column {
            height: 55%;
            width: 95%;
            left: 5%;
        }
    }
    @media (min-width: 768px) and (max-width: 992px) {
        .text-container {
            height: 236px;
            font-size: 1rem;
        }
        .btn-danger-sm {
            font-size: 1rem;
        }
        .editor-title {
            font-size: 0.70rem;
        }
        .heading {
            font-size: 1rem;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px) {
        .text-container {
            height: 326px
            font-size: 1rem;
        }
    }
    @media (min-width: 1200px) {
        .text-container {
            height: 393px;
        }
    }
    @media (max-width: 499px) {
        .text-column {
            height: 110%;
            width: 90%;
            left: 7%;
        }
        .heading {
            font-size: 1.1rem;
        }
        .btn-danger {
            display: none;
        }
        .btn-slide {
            top: 40%;
        }
        .text {
            color: white;
        }
    }
    @keyframes show-on-load {
        from {transform: translate(0px,-100rem)}
        to {transform: translate(0px,0px)}
    }
    @keyframes spin {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(1080deg)}
    }
`