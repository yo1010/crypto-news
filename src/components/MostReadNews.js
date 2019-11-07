import React from 'react';
import img from '../../public/img/top-news.jpg';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default function MostReadNews() {
    return (
        <ProductConsumer>
            {value => {
                if (value.news[6] !== undefined) {
                    const {id, title, publishedOn, readingTime} = value.news[1];
                    return(
                        <div className="img-sm-column second-image mx-auto" onClick={() => {value.handleDetail(id)}}>
                            <Link className="article-link" to={`/newsarticle/${id}`}>
                                <div className="img-sm mx-auto">
                                    <div className="img-container img-container-sm">
                                        <img src={img} className="img-fluid actual-img-sm" alt="top-news"/>
                                    </div>
                                    <div className="editor-title">
                                        <p>{title}</p>
                                        <div className="row date-minutes">
                                            <div className="heading text ml-3">
                                                {publishedOn}
                                            </div>
                                            <div className="heading text ml-5">
                                                {readingTime} min read
                                            </div>
                                        </div>
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