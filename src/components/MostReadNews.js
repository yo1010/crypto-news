import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default function MostReadNews(props) {
    return (
        <ProductConsumer>
            {value => {
                if (value.editorNews[1] !== undefined) {
                    const {id, title, publishedOn, readingTime, imageUrl} = value.editorNews[1];
                    return(
                        <div className="img-sm-column second-image mx-auto" onClick={() => {value.handleDetail(id)}}>
                            <Link className="article-link" to={`/newsarticle/${id}`}>
                                <div className="img-sm mx-auto">
                                    <div className="img-container img-container-sm">
                                        <img src={imageUrl} onLoad={() => props.handleLoad()} className="img-fluid actual-img-sm" alt="top-news"/>
                                    </div>
                                    <div className="editor-title">
                                        <p>{title}</p>
                                        <div className="row date-minutes">
                                            <div className="heading text ml-3">
                                                {publishedOn}
                                            </div>
                                            <div className="heading text ml-auto mr-3">
                                                {readingTime} мин чтение
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