import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import SearchItem from './SearchItem';

export default class SearchResults extends Component {
    render() {
        return (
            <SearchWrapper>
                <div className="title-search">Результаты <span className="orange">поиска:</span></div>
                <div className="row mx-auto">
                    <ProductConsumer>
                        {(value) => {
                            return value.searchList.map(
                                article => {
                                    if (article !== undefined) {
                                        return <SearchItem key={article.id}
                                            article={article} />
                                    } 
                                    if (value.searchList < 1) {
                                        return <div className="no-results">Статьи <span className="orange"> не найдены</span></div>
                                    }
                                }
                            )
                        }}
                    </ProductConsumer>
                </div>
            </SearchWrapper>
        )
    }
}

const SearchWrapper = styled.div`
    background: rgb(248,248,248);
    margin-top: 0.5rem;
    padding: 4rem; 
    .title-search {
        font-family: "Yeseva One", sans-serif;
        font-size: 1.5rem;
    }
    .orange {
        color: var(--mainOrange);
    }
    .no-results {
        margin-top: 5rem;
        font-size: 1.5rem;
        font-family: "Arsenal", sans-serif;
    }
`