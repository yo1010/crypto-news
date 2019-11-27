import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import BitcoinItem from './BitcoinItem';

export default class BitcoinNews extends Component {
    render() {
        return (
            <BitcoinWrapper>
                <div className="title-search">Биткойн <span className="orange">Новости:</span></div>
                <div className="row mx-auto">
                    <ProductConsumer>
                        {(value) => {
                            return value.bitcoinNews.map(
                                article => {
                                    if (article !== undefined) {
                                        return <BitcoinItem key={article.id}
                                            article={article} />
                                    }
                                    if (value.bitcoinNews < 1) {
                                        return <div className="no-results">No articles <span className="orange"> found</span></div>
                                    }
                                }
                            )
                        }}
                    </ProductConsumer>
                </div>
            </BitcoinWrapper>
        )
    }
}

const BitcoinWrapper = styled.div`
    animation: show-on-load;
    animation-duration: 2s;
    background: rgb(248,248,248);
    margin-top: 0.5rem;
    padding: 4rem; 
    .title-search {
        font-family: "Yeseva One", sans-serif;
        font-size: 1.5rem;
        border-bottom: solid 5px var(--mainOrange);
    }
    .orange {
        color: var(--mainOrange);
    }
    .no-results {
        margin-top: 5rem;
        font-size: 1.5rem;
        font-family: "Arsenal", sans-serif;
    }
    @keyframes show-on-load {
        from {transform: translate(0px,-100rem)}
        to {transform: translate(0px,0px)}
    }
`