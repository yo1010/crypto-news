import React from 'react';
import img from '../public/img/top-news.jpg';
import {ProductConsumer} from './context';
import {Link} from 'react-router-dom';

export default function EditorNews() {
    return (
        <ProductConsumer>
            {value => {    
                if (value.news[0] !== undefined) {
                        const {id, title} = value.news[0];
                return (
                    <div className="img-sm-column mx-auto" onClick={() => {value.handleDetail(id)}}>
                        <Link className="article-link" to={`/newsarticle/${title}`}>
                            <div className="img-sm mx-auto">
                                <div className="img-container">
                                    <img src={img} className="img-fluid" alt="top-news"/>
                                </div>
                                <div className="text-column-sm">
                                        <div className="heading-sm text-capitalize">
                                            editor's choice:
                                        </div>
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
