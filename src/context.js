import React, { Component } from 'react';
import Firebase from './firebase';
import 'firebase/database';

//create Context Object
const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor() {
        super();
        this.database = Firebase.database().ref().child('News');
        this.editorDatabase = Firebase.database().ref().child('EditorsChoice');
        this.arrayNews = [{}];
        this.arrayTopNews = [{}];
        this.state = {
            news: [{}],
            openNewsItem: {},
            topNews: [{}],
            editorNews: {}
        };
    }
    handleDetail = (id) => {
        const newsItem = this.state.news.find((item => item.id === id));
        this.setState(()=>{
            return {openNewsItem:newsItem}
        })
    };
    handleTopDetail = (id) => {
        const newsItem = this.state.topNews.find((item => item.id === id));
        this.setState(()=>{
            return {openNewsItem:newsItem}
        })
    };
    componentDidMount() {
        this.editorDatabase.on('value', snapshot => {
            this.setState({
                editorNews: snapshot.val(),
            });
        });
        this.database.limitToLast(4).on('value', snapshot => {
            this.arrayTopNews =[{}];
            snapshot.forEach(childSnapshot => {
                this.arrayTopNews.unshift(childSnapshot.val());
                this.setState({
                    topNews: this.arrayTopNews,
                });
            });
        });
        this.database.on('value', (snapshot) => {
            this.arrayNews = [];
            snapshot.forEach(childSnapshot => {
                this.arrayNews.unshift(childSnapshot.val());
            });
            this.arrayNews.splice(0,4)
            this.setState({
                news: this.arrayNews,
            });
        });
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                handleTopDetail: this.handleTopDetail
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};