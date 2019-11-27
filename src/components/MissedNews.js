import React, { Component } from 'react'
import {ProductConsumer, ProductContext} from '../context';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import img from '../../public/img/placeholder-16-9.jpg'

export default class MissedNews extends Component {
    constructor() {
        super();
        this.state = {
            currentItem: 1,
            currentItemSecond: 1
        }
        this.changeNews = this.changeNews.bind(this);
    }
    changeNews(length) {
        if (this.state.currentItem > length - 7) {
            this.setState({currentItem: this.state.currentItem - 1})
        } else  {
            this.setState({currentItem: length - 2})
        }
        if (this.state.currentItemSecond > length - 13) {
            this.setState({currentItemSecond: this.state.currentItemSecond - 1})
        } else  {
            this.setState({currentItemSecond: length - 2})
        }
    }
    componentDidMount() {
        console.log(this.state.currentItem)
        if (this.context.newsLeft !== undefined) {
            this.setState({currentItem: this.context.newsLeft.length - 1})
            this.setState({currentItemSecond: this.context.newsLeft.length - 7})
            console.log(this.context.newsLeft.length)
            const length = this.context.newsLeft.length;
            setInterval(() => this.changeNews(length), 2000)
        }
    }
    componentWillUnmount() {
        clearInterval();
    }
    render() {
        return (
            <MissedNewsWrapper className="missed-news mx-auto">
                <ProductConsumer>
                    {value => {
                        console.log(value.newsLeft.length - 7)
                        const { urlName, title, readingTime, publishedOn, imageUrl, content, paragraph1, paragraph2 } = this.state.currentItem > value.newsLeft.length - 7 && 
                        value.newsLeft[this.state.currentItem] !== undefined ? 
                        value.newsLeft[this.state.currentItem] : value.newsLeft[value.newsLeft.length -1];
                        return (
                            <div className="row main-container">
                                <div className="col-8">
                                    <div className="main-header"><div className="separator"/>Пропущенный:</div>
                                    <Link className="article-link" to={`/newsarticle/${urlName}`} onClick={() => clearInterval()}>
                                        <div className="row item-container-mn mx-auto">
                                            <div className="text-container-mn mx-auto">
                                                <div className="text mx-3">
                                                    <div className="title-mn mx-auto">{title}</div>
                                                </div>
                                            </div>
                                            <div className="img-container-mn">
                                                <img src={imageUrl} className="img-fluid" alt="bitcoin dollars altcoins"/>
                                            </div>
                                            <div className="text-container-mn mx-auto">
                                                <div className="text mb-3">
                                                    <div className="content-mn mx-2">{content ? (content, paragraph1) : (paragraph1, paragraph2)}</div>
                                                </div>
                                                <div className="row header mx-auto">
                                                    <div className="metatag"><button className="keyword-btn"><i className="far fa-clock"></i>{readingTime} мин</button></div>
                                                    <div className="date ml-auto"><button className="date-btn"><i className="far fa-calendar"></i>{publishedOn}</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="main-header text-capitalize mt-1"><div className="separator"/>больше заголовков:</div>
                                    <div className="row mx-auto missed-container-big">
                                        <div className="wrapper mx-auto mt-2 px-1">
                                            <Link className="article-link" to={`/newsarticle/${this.state.currentItemSecond ? 
                                                value.newsLeft[this.state.currentItemSecond].urlName : value.newsLeft[value.newsLeft.length - 7].urlName}`} onClick={() => clearInterval()}>
                                                <div className="missed-container mx-auto">
                                                    <div className={`title-all title-missed`}>
                                                        <h1 className="mx-auto title-header mb-3 mx-2">{this.state.currentItemSecond ? 
                                                        value.newsLeft[this.state.currentItemSecond].title : value.newsLeft[value.newsLeft.length - 7].title}</h1>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="main-header"><div className="separator"/>Рекомендуемые:</div>
                                    <Link className="article-link" to={`/newsarticle/${value.newsLeft[25].urlName}`} onClick={() => clearInterval()}>
                                        <div className="img-mn">
                                            <div className="img-container-mn mt-5">
                                                <img src={value.newsLeft[25].imageUrl} className="img-fluid" alt="bitcoin dollars altcoins"/>
                                            </div>
                                            <div className="editor-title-mn">
                                                <div className="row date-minutes mt-3">
                                                    <div className="heading-mn text ml-1">
                                                        {value.newsLeft[25].publishedOn}
                                                    </div>
                                                    <div className="heading-mn text ml-auto mr-1">
                                                        {value.newsLeft[25].readingTime} мин чтение
                                                    </div>
                                                </div>
                                                <p>{value.newsLeft[25].title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link className="article-link" to={`/newsarticle/${value.newsLeft[35].urlName}`} onClick={() => clearInterval()}>
                                        <div className="img-mn">
                                            <div className="img-container-mn mt-5">
                                                <img src={value.newsLeft[35].imageUrl} className="img-fluid" alt="bitcoin dollars altcoins"/>
                                            </div>
                                            <div className="editor-title-mn">
                                                <div className="row date-minutes mt-3">
                                                    <div className="heading-mn text ml-1">
                                                        {value.newsLeft[35].publishedOn}
                                                    </div>
                                                    <div className="heading-mn text ml-auto mr-1">
                                                        {value.newsLeft[35].readingTime} мин чтение
                                                    </div>
                                                </div>
                                                <p>{value.newsLeft[35].title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link className="article-link" to={`/newsarticle/${value.newsLeft[30].urlName}`} onClick={() => clearInterval()}>
                                        <div className="img-mn">
                                            <div className="img-container-mn mt-5">
                                                <img src={value.newsLeft[30].imageUrl} className="img-fluid" alt="bitcoin dollars altcoins"/>
                                            </div>
                                            <div className="editor-title-mn">
                                                <div className="row date-minutes mt-3">
                                                    <div className="heading-mn text ml-1">
                                                        {value.newsLeft[30].publishedOn}
                                                    </div>
                                                    <div className="heading-mn text ml-auto mr-1">
                                                        {value.newsLeft[30].readingTime} мин чтение
                                                    </div>
                                                </div>
                                                <p>{value.newsLeft[30].title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </MissedNewsWrapper>
        )
    }
}

MissedNews.contextType = ProductContext;

const MissedNewsWrapper = styled.div`
    margin-top: 1rem;
    width: 100%;
    .img-mn {
        position: relative;
    }
    .editor-title-mn {
        overflow: hidden;
        width: 100%;
        position: absolute;
        bottom: 0%;
        color: white;
        padding: 1rem;
        height: 50%;
        margin-bottom: 0.5rem;
        font-size: 0.98rem;
        font-weight: bold;
        text-shadow: 0.5px 0.5px black;
    }
    .separator {
        border: solid 2px var(--mainOrange);
        width: 5rem;
    }
    .item-container-mn {
        width: 100%;
    }
    .item-container-mn:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    .main-header {
        font-family: 'Yeseva One', sans-serif;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    background: white;
    padding-bottom: 1rem;
    padding-top: 1rem;
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
    .title-mn {
        font-size: 1.2rem; 
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width:100%;
        font-family: 'Yeseva One', sans-serif;
        padding-bottom: 1rem;
        color: var(--blueGreen);
    }
    .content-mn {
        font-family: 'Arsenal', sans-serif;
        font-size: 1rem;
        height: 10rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .container {
        border-radius: 0.2rem;
        padding: 0.5rem;
        background: white;
    }
    .text-container-mn {
        border-radius: 0.2rem;
        padding-top: 0.5rem;
        margin-left: 0.5rem;
        width: 100%;
        height: auto;
    }
    .text {
        overflow: hidden;
        text-align: center;
    }
    .img-container-mn {
        overflow:hidden;
        border-bottom: solid 5px var(--mainOrange);
        border-radius: 0.2rem;
        box-shadow: 0px 0px 1px 1px grey;
        text-align: center;
    }
    .img-first {
        filter: grayscale(40%) brightness(80%);
        position: absolute;
    }
    .far {
        margin-right: 3px;
    }
    .header {
        width: 100%;
        padding-bottom: 0.5rem;
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
    .black {
        color: black !important;
    }
    .main-header {
        font-family: 'Yeseva One', sans-serif;
        font-size: 1.rem;
    }
    .container {
        width: 100%;
    }
    .title-all {
        height: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width:100%;
    }
    .title-header {
        color: var(--blueGreen);
        font-family: 'Yeseva One', sans-serif;
        font-size: 1.3rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width:100%;
        text-shadow: 2px 2px 2px darkgrey;
    }
    .missed-container-big {
        width: 100%;
        border-radius: 0.2rem;
    }
    .missed-container-big: hover {
        .title-header {
            color: var(--mainOrange);
        }
    }
    .wrapper {
        width: 100%;
    }
    @media (max-width: 800px) {
        .title {
            font-size: 1rem;
        }
    }
    @media (max-width: 995px) {
        display: none
    }
`