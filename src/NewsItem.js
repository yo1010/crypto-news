import React, { Component } from 'react';
import styled from "styled-components";
import img from '../public/img/top-news.jpg';
import {ProductConsumer} from './context';
import {Link} from 'react-router-dom';

export default class NewsItem extends Component {
    render() {
        const {id, title, content, publishedOn} = this.props.article;
        return (
                <ProductConsumer>
                    {(value) => {
                        return (
                            <NewsItemWrapper className="col-5 col-md-3 col-lg-2 col-xl-2" 
                            onClick={() => {value.handleDetail(id)}}>
                                <Link className="article-link" to={`/newsarticle/${id}`}>
                                    <div className="container">
                                        <div className="row header mx-1">
                                        <div className="date ml-auto"><i className="far fa-calendar-alt"></i>{publishedOn}</div>
                                        </div>
                                        <div className="img-container">
                                            <img src={img} className="img-fluid img-thumbnail"alt="news photo"/>
                                        </div>
                                        <div className="text my-3 scrollbar-danger">
                                            <div className="title">{title}</div>
                                            <div className="content"><p>{content}</p></div>
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
    margin-top: 1rem;
    border-radius: 0.5rem;
    &:hover {
        background: lightgrey;
        cursor: pointer;
    }
    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%;
    }
    .text {
        height: 150px;
        overflow-y: scroll;
        overflow-x: hidden;
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
    .date {
        font-size: 0.75rem;
        margin-top: 0.1rem;
        margin-right: 0.5rem;
        color: red;
        margin-bottom: 0.2rem;
    }
    .scrollbar-danger::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        background-color: #F5F5F5;
        border-radius: 10px; }
    .scrollbar-danger::-webkit-scrollbar {
        width: 8px;
        background-color: #F5F5F5; }
    .scrollbar-danger::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        background-color: red; }
`
