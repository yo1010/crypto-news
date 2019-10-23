import React from 'react';
import img from '../public/img/top-news.jpg';
import {ProductConsumer} from './context';
import {Link} from 'react-router-dom';

export default function SecondaryNews() {
    return (
        <ProductConsumer>
            {value => {
                if (value.topNews[1] !== undefined) {
                    const {id, title} = value.topNews[1]
                    return(
                        <div className="img-sm-column mx-auto" onClick={() => {value.handleTopDetail(id)}}>
                            <Link className="article-link" to={`/newsarticle/${id}`}>
                                <div className="img-sm mx-auto">
                                    <img src={img} className="img img-thumbnail" alt="top-news"/>
                                    <div className="text-column-sm">
                                            <h3 className="heading-sm text-capitalize">
                                                {title}
                                            </h3>
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
