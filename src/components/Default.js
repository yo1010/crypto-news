import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container my-5">
                <div className="row my-5">
                    <div className="col-10 mx-auto 
                    text-center text-title text-uppercase pt-5 my-5">
                        <h1 className="display-3">
                            404
                        </h1>
                        <h1 className="my-3 text-danger">ошибка</h1>
                        <h2 className="my-3">Страница не найдена</h2>
                        <h3 className="my-3">
                            запрошенный URL{" "}
                            <span className="text-danger">
                                {this.props.location.pathname}
                            </span>{" "}
                            не был найден
                        </h3>
                        <h3 className="my-3 text-warning">пожалуйста, перейдите на другую страницу</h3>
                    </div>  
                </div>
            </div>
        )
    }
}
