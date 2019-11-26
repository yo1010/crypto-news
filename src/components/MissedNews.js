import React, { Component } from 'react'
import {ProductConsumer, ProductContext} from '../context';
import {Link} from 'react-router-dom';
import styled from "styled-components";

export default class MissedNews extends Component {
    constructor() {
        super();
        this.state = {
            currentItem: 1
        }
        this.changeNews = this.changeNews.bind(this);
    }
    changeNews(length) {
        if (this.state.currentItem > length - 7) {
            this.setState({currentItem: this.state.currentItem - 1})
        } else  {
            this.setState({currentItem: length - 2})
        }
        console.log(this.state.currentItem)
    }
    componentDidMount() {
        console.log(this.state.currentItem)
        if (this.context.newsLeft !== undefined) {
            this.setState({currentItem: this.context.newsLeft.length - 1})
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
            <MissedNewsWrapper className="container missed-news mt-3 mx-auto">
                <div className="container row mx-auto">
                    <ProductConsumer>
                        {value => {
                            console.log(value.newsLeft.length - 7)
                            const { urlName, title, key } = this.state.currentItem > value.newsLeft.length - 7 && 
                            value.newsLeft[this.state.currentItem] !== undefined ? 
                            value.newsLeft[this.state.currentItem] : value.newsLeft[value.newsLeft.length -1];
                            return (
                                <div className="row mx-auto missed-container-big">
                                    <div className="wrapper mx-auto">
                                        <Link className="article-link" to={`/newsarticle/${urlName}`} onClick={() => clearInterval()}>
                                            <div className="missed-container mx-auto">
                                                <div className={`title-all title-missed${key}`}>
                                                    <h1 className="mx-auto title-header">
                                                        <span className="black">Пропущенный:</span> {title}</h1>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }}
                    </ProductConsumer>
                </div>
            </MissedNewsWrapper>
        )
    }
}

MissedNews.contextType = ProductContext;

const MissedNewsWrapper = styled.div`
    border: solid 2px black;
    border-radius: 0.2rem;
    width: 100%;
    &: hover {

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
    }
    .missed-container, .missed-container-big {
        width: 100%;
    }
    .wrapper {
        width: 100%;
    }
`