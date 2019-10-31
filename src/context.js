import React, { Component } from 'react';
import Firebase from './firebase';
import 'firebase/database';

//create Context Object
const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor() {
        super();
        this.database = Firebase.database().ref("flamelink/environments/production/content/news/en-US");
        this.hottestDatabase = Firebase.database().ref().child('HottestNews');
        this.editorDatabase = Firebase.database().ref().child('EditorsChoice');
        this.arrayNews = [{}];
        this.arrayBitcoinNews = [{}];
        this.arrayBlockchainNews = [{}];
        this.searchArray = [{}];
        this.arrayTopNews = [{}];
        this.state = {
            search: "",
            news: [{}],
            openNewsItem: {},
            topNews: [{}],
            searchList: [{}],
            editorNews: {},
            hottestNews: {},
            bitcoinNews: [{}],
            blockchainNews: [{}]
        };
    }
    handleDetail = (id) => {
        const newsItem = this.state.news.find((item => item.id === id));
        this.setState(()=>{
            return {openNewsItem:newsItem}
        })
    };
    handleBitcoinDetail = (id) => {
        const newsItem = this.state.bitcoinNews.find((item => item.id === id));
        this.setState(()=>{
            return {openNewsItem:newsItem}
        })
    };
    handleBlockchainDetail = (id) => {
        const newsItem = this.state.blockchainNews.find((item => item.id === id));
        this.setState(()=>{
            return {openNewsItem:newsItem}
        })
    };
    handleSearch = (input) => {
        let newState = [];
        let finalState = [];
        let finalObj;
        for (let nItem in this.state.news) {
            let obj = this.state.news[nItem];
            let objVal = Object.values(obj);
            let objString = objVal.filter(e => typeof e === 'string' && e !== '');
            for (let str in objString) {
                let lowStr = objString[str].toLowerCase();
                if (lowStr.includes(input)) {
                    finalObj = obj;
                }
            }
            newState.unshift(finalObj);
        };
        let finalStateSet = new Set(newState);
        finalState = Array.from(finalStateSet);
        console.log(finalState);
        console.log(newState);
        if (input !== "") {
            this.setState({
                searchList: finalState
            });
        }
    };
    handleTopDetail = (id) => {
        const newsItem = this.state.topNews.find((item => item.id === id));
        this.setState(()=>{
            return {openNewsItem:newsItem}
        })
    };
    UNSAFE_componentWillMount() {
        this.hottestDatabase.on('value', snapshot => {
            this.setState({
                hottestNews: snapshot.val(),
            });
        });
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
            this.arrayBitcoinNews = [];
            this.arrayBlockchainNews = [];
            snapshot.forEach(childSnapshot => {
                if (childSnapshot.val().keyword1 === "биткойн новости") {
                    this.arrayBitcoinNews.unshift(childSnapshot.val());
                }
                if (childSnapshot.val().keyword2 === "блокчейн") {
                    this.arrayBlockchainNews.unshift(childSnapshot.val());
                }
                this.arrayNews.unshift(childSnapshot.val());
            });
            this.arrayNews.splice(0,4)
            this.setState({
                news: this.arrayNews,
                bitcoinNews: this.arrayBitcoinNews,
                blockchainNews: this.arrayBlockchainNews
            });
            console.log(this.state.bitcoinNews)
        });
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                handleTopDetail: this.handleTopDetail,
                handleSearch: this.handleSearch,
                handleBitcoinDetail: this.handleBitcoinDetail,
                handleBlockchainDetail: this.handleBlockchainDetail
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};