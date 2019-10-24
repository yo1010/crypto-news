import React from 'react';
import img from '../public/img/top-news.jpg';
import {ProductConsumer} from './context';
import {Link} from 'react-router-dom';

export default function MostReadNews() {
    return (
        <ProductConsumer>
            {value => {
                if (value.news[4] !== undefined) {
                    const {id, title} = value.news[4]
                    return(
                        <div className="img-sm-column second-image mx-auto" onClick={() => {value.handleTopDetail(id)}}>
                            <Link className="article-link" to={`/newsarticle/${id}`}>
                                <div className="img-sm mx-auto">
                                    <div className="img-container">
                                        <img src={img} className="img-fluid" alt="top-news"/>
                                    </div>
                                    <div className="text-column-sm">
                                            <h3 className="heading-sm text-capitalize">
                                                most read:
                                            </h3>
                                    </div>
                                    <div className="editor-title">
                                        <h3>{title}</h3>
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