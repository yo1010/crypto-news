import React, { Component } from 'react';
import styled from "styled-components";
import 'firebase/storage';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import imgBg from '../../public/img/placeholder-16-9.jpg'

export default class TopNewsItem extends Component {
    render() {
        const {id, title, publishedOn, imageUrl, readingTime, urlName} = this.props.article;
        return (
            <ProductConsumer>
                {(value) => {
                    return (
                        <TopNewsItemWrapper className="col-10 col-sm-6 col-md-6 col-lg-3 col-xl-3" 
                        onClick={() => {value.handleDetail(id)}}>
                            <Helmet>
                                <meta property="og:title" content={title}/>
                                <meta property="og:image" content={imageUrl}/>
                            </Helmet>
                            <div className="img-sm-column-sd mx-auto" onClick={() => {value.handleDetail(id)}}>
                                <Link className="article-link" to={`/newsarticle/${urlName}`}>
                                    <div className="img-sm mx-auto">
                                        <div className="img-container img-container-sm">
                                            <img src={imageUrl} className="img-fluid actual-img-sm" alt="top-news"/>
                                        </div>
                                        <div className="editor-title-sd">
                                            <div className="row date-minutes mt-3">
                                                <div className="heading-sd text ml-1">
                                                    {publishedOn}
                                                </div>
                                                <div className="heading-sd text ml-auto mr-1">
                                                    {readingTime} мин чтение
                                                </div>
                                            </div>
                                            <p>{title}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </TopNewsItemWrapper>
                    )}}
            </ProductConsumer>
    )
    }
}

const TopNewsItemWrapper = styled.div`
    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%;
    }
    .img-container-sm {
        background-image: url(${imgBg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .actual-img-sm {
        filter: grayscale(40%) brightness(90%) !important;
    }
    .heading-sd {
        color: var(--mainOrange);
        font-size: 0.75rem;
        font-family: 'Arsenal', sans-serif;
    }
    .img-sm {
        position: relative;
    }
    .editor-title-sd {
        overflow: hidden;
        width: 100%;
        position: absolute;
        bottom: 0%;
        color: white;
        padding: 1rem;
        height: 110%;
        margin-bottom: 0.5rem;
        font-size: 0.98rem;
        font-weight: bold;
        text-shadow: 0.5px 0.5px black;
    }
    .img-sm-column-sd {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    .img-sm-column-sd:hover {
        img {
            transition: 1s;
            transform: scale(1.3);
        }
    }
    img:hover {
        transition: 1s;
        transform: scale(1.3);
    }
    @media (max-width: 995px) {
        .editor-title-sd {
            height: 105%
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
