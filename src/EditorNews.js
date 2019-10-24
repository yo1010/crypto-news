import React from 'react';
import img from '../public/img/top-news.jpg';
import {ProductConsumer} from './context';
import {Link} from 'react-router-dom';

export default function EditorNews() {
    return (
        <ProductConsumer>
            {value => {    
                if (value.editorNews !== undefined) {
                        const {id, title} = value.editorNews;
                return (
                    <div className="img-sm-column mx-auto" onClick={() => {value.handleTopDetail(id)}}>
                        <Link className="article-link" to={`/newsarticle/${id}`}>
                            <div className="img-sm mx-auto">
                                <div className="img-container">
                                    <img src={img} className="img-fluid" alt="top-news"/>
                                </div>
                                <div className="text-column-sm">
                                        <h3 className="heading-sm text-capitalize">
                                            editor's choice:
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
