import React, { Component } from 'react';
import Firebase from './firebase';
import 'firebase/database';
import 'firebase/storage';

//create Context Object
const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor() {
        super();
        this.database = Firebase.database().ref("flamelink/environments/production/content/news/en-US");
        this.storage = Firebase.storage().ref("flamelink/media");
        this.arrayNews = [{}];
        this.openNewsItem = {};
        this.indexNewsItem = 0;
        this.arrayBitcoinNews = [{}];
        this.arrayBlockchainNews = [{}];
        this.searchArray = [{}];
        this.arrayTopNews = [{}];
        this.arrayNewsLeft = [{}];
        this.state = {
            search: "",
            editorNews: [{}],
            newsLeft: [{}], 
            topNews: [{}],
            searchList: [{}],
            editorNews: {},
            openNewsItem: this.openNewsItem,
            indexNewsItem: 0,
            fromTopNews: false,
            fromEditorNews: false,
            hottestNews: {},
            bitcoinNews: [{}],
            blockchainNews: [{}],
            urlArray: [],
            readingTime: 0,
            arrVal: []
        };
        this.storage.listAll().then((res) => {
            let urlArray = [];
            let refName = "";
            res.items.forEach((itemRef) => {
                refName = itemRef.name.toLowerCase();
                let refChild = this.storage.child(refName)
                refChild.getDownloadURL().then((url)=>{
                    urlArray.unshift(url);
                })
            })
            this.setState({urlArray: urlArray})
            console.log(urlArray)
        });
        this.database.on('value', (snapshot) => {
            this.arrayTopNews =[{}];
            this.arrayNews = [];
            this.arrayNewsLeft = [];
            this.arrayBitcoinNews = [];
            this.arrayBlockchainNews = [];
            snapshot.forEach(childSnapshot => {
                let childVal = childSnapshot.val();
                let arrVal = Object.values(childVal);
                // creating an imageUrl property for each item in database
                let imgVal = arrVal[3];
                this.state.urlArray.forEach((item) => {
                    if (Array.isArray(imgVal)) {
                        if (item.includes(imgVal[0])) {
                            childVal.imageUrl = item;
                        }
                    }
                })
                // creating a readingTime property for each item in database
                let arrString = arrVal.filter(e => typeof e === 'string' && e !== '');
                let totalCоunt = 0;
                let readingTime = 0;
                for (let str in arrString) {
                    let wordCount = arrString[str].split(' ').length;
                    totalCоunt += wordCount;
                }
                readingTime = Math.round(totalCоunt / 200);
                childVal.readingTime = readingTime;
                //creating a urlName property for each item in database
                let a = {"Ё":"YO","Й":"I","Ц":"TS","У":"U",
                "К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH",
                "Щ":"SCH","З":"Z","Х":"H","Ъ":"u","ё":"yo",
                "й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n",
                "г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"u",
                "Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R",
                "О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f",
                "ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o",
                "л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":
                "CH","С":"S","М":"M","И":"I","Т":"T","Ь":"u",
                "Б":"B","Ю":"YU","я":"ya", "и":"i", "ч":"ch","с":"s","м":"m",
                "т":"t","ь":"u","б":"b","ю":"yu"};
                let urlName = childVal.title.split('').map(function (char) { 
                    return a[char] || char
                }).join("");
                urlName = urlName.replace(/[^a-zA-Z ]/g, "");
                urlName = urlName.replace(/\s+/g, '-');
                childVal.urlName = urlName;
                //splitting data into either Bitcoin or Blockchain
                if (childVal.keyword1 === "биткойн новости") {
                    this.arrayBitcoinNews.unshift(childVal);
                }
                if (childVal.keyword2 === "блокчейн") {
                    this.arrayBlockchainNews.unshift(childVal);
                }
                this.arrayNews.unshift(childVal);
            });
            this.arrayTopNews = this.arrayNews.splice(0,4);
            this.arrayNewsLeft = this.arrayNews.slice(2);
            this.setState({
                topNews: this.arrayTopNews,
                editorNews: this.arrayNews,
                newsLeft: this.arrayNewsLeft,
                bitcoinNews: this.arrayBitcoinNews,
                blockchainNews: this.arrayBlockchainNews
            });
        });
    }
    handleDetail = (id) => {
        this.openNewsItem = this.state.editorNews.find((item => item.id === id));
        if (this.openNewsItem !== undefined) {
            this.indexNewsItem = this.state.editorNews.indexOf(this.openNewsItem);
            this.setState(() =>({
                fromEditorNews: true
            }));
        }
        if (this.openNewsItem === undefined) {
            this.openNewsItem = this.state.topNews.find((item => item.id === id));
            this.indexNewsItem = this.state.topNews.indexOf(this.openNewsItem);
            this.setState(() =>({
                fromTopNews: true
            }));
        };
        this.setState({
            openNewsItem: this.openNewsItem,
            indexNewsItem: this.indexNewsItem
        });
    };
    handleSearch = (input) => {
        let newState = [];
        let finalState = [];
        let finalObj;
        for (let nItem in this.state.editorNews) {
            let obj = this.state.editorNews[nItem];
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
    calcReadingTime = () => {
        for (let newsItem in this.state.topNews) {
            let arrVal = Object.values(this.state.topNews[newsItem]);
            let arrString = arrVal.filter(e => typeof e === 'string' && e !== '');
            let totalCоunt = 0;
            let readingTime = 0;
            for (let str in arrString) {
                let wordCount = arrString[str].split(' ').length;
                totalCоunt += wordCount;
            }
            readingTime = Math.round(totalCоunt / 200);
        }
    };
    componentWillUnmount() {
        this.database.off();
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                handleTopDetail: this.handleTopDetail,
                handleSearch: this.handleSearch,
                handleBitcoinDetail: this.handleBitcoinDetail,
                handleBlockchainDetail: this.handleBlockchainDetail,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer, ProductContext};