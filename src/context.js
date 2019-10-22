import React, { Component } from 'react';
import Firebase from './firebase';
import 'firebase/database';

//create Context Object
const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor() {
        super();
        this.database = Firebase.database().ref().child('News');
        this.array = [];
        this.state = {
            news: [{
                "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor                                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis                                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore                                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,                                      sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "id" : 1,
                "publishedOn" : "22.10.2019",
                "title" : "news title"
                },
                {
                    "id" : 2,
                    "title": "news title",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "publishedOn": "22.10.2019"  
                }],
            openNewsItem: {},
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
        this.database.on('value', (snapshot) => {
            this.array = [];
            snapshot.forEach(childSnapshot => {
                this.array.push(childSnapshot.val());
                this.setState({news: this.array});
            });
        });
        console.log(this.array)
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