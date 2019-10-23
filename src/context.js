import React, { Component } from 'react';
import Firebase from './firebase';
import 'firebase/database';
import { timingSafeEqual } from 'crypto';

//create Context Object
const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor() {
        super();
        this.database = Firebase.database().ref().child('News');
        this.array = [];
        this.state = {
            news: [],
            openNewsItem: {},
            topNews: {}
        };
    }
    getItem = (id) => {
        const newsItem = this.state.news.find((item => item.id === id));
        return newsItem;
    };
    handleDetail = (id) => {
        const newsItem = this.getItem(id);
        this.setState(()=>{
            return {openNewsItem:newsItem}
        })
    };
    componentDidMount() {
        this.array = [];
        this.database.limitToLast(1).on('value', snapshot => {
            snapshot.forEach(childSnapshot => {
                this.setState({
                    topNews: childSnapshot.val(),
                });
            });
        });
        this.database.on('value', (snapshot) => {
            this.array = [];
            snapshot.forEach(childSnapshot => {
                this.array.unshift(childSnapshot.val());
            });
            this.array.shift()
            this.setState({
                news: this.array,
            });
        });
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};