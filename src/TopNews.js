import React, { Component } from 'react';
import styled from "styled-components";
import img from '../public/img/top-news.jpg';
import {ProductConsumer} from './context';
import {Link} from 'react-router-dom';
import EditorNews from './EditorNews';
import MostReadNews from './MostReadNews';
export default class TopNews extends Component {
    constructor() {
        super(),
        this.state = {
            slideIndex: 0
        },
        this.plusSlides=this.plusSlides.bind(this);
        this.minusSlides=this.minusSlides.bind(this);
        this.currentSlide=this.currentSlide.bind(this);
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
        console.log(slideIndex)
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
        console.log(slideIndex)
    }
    currentSlide(n) {
        this.setState(() => {
            return {slideIndex: n}
        })
    }
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, title, publishedOn} = value.topNews[this.state.slideIndex];
                    return (
                        <React.Fragment>
                            <NewsContainer>
                                <div className="container big-container">
                                    <div className="row mx-auto mb-3">
                                        <div className="img-column mx-auto col-10 col-md-8 col-lg-8"
                                        onClick={() => {value.handleTopDetail(id)}}>
                                            <Link className="article-link" to={`/newsarticle/${title}`}>
                                                <div className="img-column-one mx-auto">
                                                    <button className="btn-danger">Latest News</button>
                                                    <div className="img-container">
                                                        <img src={img} className="img-fluid" alt="top-news"/>
                                                    </div>
                                                    <div className="text-column">
                                                        <div className="text-container mx-auto">
                                                            <h3 className="heading text-capitalize">
                                                                {title}
                                                            </h3>
                                                            <h5 className="text">
                                                                {publishedOn}
                                                            </h5>
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
                                        <div className="img-column-two mx-auto col-10 col-md-4 col-lg-4">
                                            <div className="container small-container">
                                                <EditorNews/>
                                                <MostReadNews/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NewsContainer>
                        </React.Fragment>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const NewsContainer = styled.div`
    width: 100%;
    border-top: solid 5px red;
    background: rgba(211,211,211, 0.6);
    margin-right: 0.8rem;
    margin-top: 7rem;
    border-bottom-color: red;
    border-bottom-width: 1rem;
    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        margin-top: 1rem;
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
        top:47%;
        color: black;
        font-weight: bold;
        transition: 0.6s ease;
        border: none;
        user-select: none;
        z-index: 3;
        background: none;
        outline: none;
    }
    .prev {
        left: -1rem;
        padding-left: 0;
    }
    .next {
        right: -1rem;
        padding-right: 0;
    }
    .btn-slide:hover {
        color: red;
        text-shadow: 2px 2px 2px black;
        animation: text-jump 0.2s;
        animation-iteration-count: 3;
    }
    .arrow {
        font-size: 2rem;
    }
    .big-container {
        padding: 1rem;
    }
    .dots{
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
        background-color: white;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
        z-index: 4;
    }
    .active, .dot: hover {
        background-color: red;
    }
    .btn-danger {
        position: absolute;
        z-index: 1;
        bottom: 70%;
        font-size: 2rem;
        background: red !important;
        outline: none;
    }
    .editors-choice {
        margin-top: 1rem;
        text-align: center;
    }
    .btn-danger-sm {
        position: absolute;
        z-index: 1;
        bottom: 70%;
        font-size: 1.5rem;
        background: red !important;
        color: white;
        outline: none;
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
    }
    .heading-sm {
        margin-top: 0.5rem;
        color: red;
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
        margin-top:4.1rem;
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
    .text-column-sm {
        overflow: hidden;
        width: 100%;
        position: absolute;
        bottom: 56%;
        color: white;
        padding: 1rem;
        height: 40%;
        margin-bottom: 0.5rem;
        background: rgba(0,0,0, 0.6);
    }
    .editor-title {
        overflow: hidden;
        width: 100%;
        position: absolute;
        bottom: 0%;
        color: white;
        padding: 1rem;
        height: 40%;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }
    .img-column {
        position: relative;
        border-width: 5px;
        border-color: red;
        margin-right: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .img-column-one {
        position: relative;
        border-width: 5px;
        border-color: red;
        margin-right: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        box-shadow: 0px 0px 2px 2px grey;
    }
    .img-column-two {
        position: relative;
        border-width: 5px;
        border-color: red;
        margin-right: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .img-sm-column {
        box-shadow: 0px 0px 2px 2px grey;
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
    @media (max-width: 767px) {
        .title {
            margin: 3rem;
        }
    }
    @meida (min-width: 767px) {
        .title {
            margin: 2rem;
        }
    }
    @media (max-width: 768px) {
        .text-container {
            height: 295px;
        }
        .display-lg{
            display: none;
        }
        .img-column-two {
            display: none;
        }
    }
    @media (min-width: 768px) and (max-width: 992px) {
        .text-container {
            height: 236px;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px) {
        .text-container {
            height: 326px;
        }
    }
    @media (min-width: 1200px) {
        .text-container {
            height: 393px;
        }
    }
`