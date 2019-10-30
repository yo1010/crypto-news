import React, { Component } from 'react';
import {ProductConsumer} from './context';
import styled from 'styled-components';
import SearchItem from './SearchItem';

export default class SearchResults extends Component {
    render() {
        return (
            <SearchWrapper>
                <div className="row title-search">
                    Search <span className="orange"> Results:</span>
                </div>
                <div className="row mx-auto">
                    <ProductConsumer>
                        {(value) => {
                            return value.searchList.map(
                                article => {
                                    return <SearchItem key={article.id}
                                            article={article} />
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
    margin-top: 7rem;
    padding: 4rem; 
    .title-search {
        font-family: "Yeseva One", sans-serif;
        font-size: 1.5rem;
    }
    .orange {
        color: var(--mainOrange);
    }
`