import React from 'react';
import img from '../public/img/top-news.jpg';
import {ProductConsumer} from './context';
import {Link} from 'react-router-dom';

export default function MostReadNews() {
    return (
        <ProductConsumer>
            {value => {
                if (value.news[6] !== undefined) {
                    const {id, title} = value.news[6];
                    return(
                        <div className="img-sm-column second-image mx-auto" onClick={() => {value.handleHotDetail(id)}}>
                            <Link className="article-link" to={`/newsarticle/${id}`}>
                                <div className="img-sm mx-auto">
                                    <div className="img-container">
                                        <img src={img} className="img-fluid" alt="top-news"/>
                                    </div>
                                    <div className="text-column-sm">
                                            <button className="btn-danger-sm">
                                                hottest this week
                                            </button>
                                    </div>
                                    <div className="editor-title">
                                        <p>{title}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            }}
        </ProductConsumer>
    )
}