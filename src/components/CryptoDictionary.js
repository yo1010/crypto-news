import React from 'react';
import styled from 'styled-components';

export default function CryptoDictionary() {
    return (
        <CryptoDictionaryWrapper>
            <div className="container">
                <div className="heading text-capitalize my-5">крипто <span className="orange">
                    Словарь</span></div>
                <div className="title text-capitalize my-3">what is cryptocurrency?</div>
                <div className="content">
                    <p>A <span className="orange">cryptocurrency</span> (or crypto currency) is a digital asset designed to work as a 
                        medium of exchange that uses strong cryptography to secure financial transactions, 
                        control the creation of additional units, and verify the transfer of assets.</p>
                </div>
                <div className="title text-capitalize my-3">what is blockchain?</div>
                <div className="content">
                    <p>A <span className="orange">blockchain</span> is a database that is shared across a network of computers. 
                        Once a record has been added to the chain it is very difficult to change. ... 
                        The records that the network accepted are added to a block. Each block contains 
                        a unique code called a hash. It also contains the hash of the previous block in the 
                        chain.</p>
                        <p>A <span className="orange">digital ledger</span> is used to record 
                        transactions across many computers so that any involved record cannot 
                        be altered retroactively, without the alteration of all subsequent blocks.</p>
                </div>
                <div className="title text-capitalize my-3">what is bitcoin?</div>
                <div className="content">
                    <p><span className="orange">Bitcoin</span> is a digital and global money system currency. It allows people to send or 
                        receive money across the internet, even to someone they don't know or don't trust. ... 
                        The mathematical field of cryptography is the basis for Bitcoin's security. 
                        Bitcoin was invented by someone using the name Satoshi Nakamoto.</p>
                </div>
                <div className="title text-capitalize my-3">how does bitcoin work?</div>
                <div className="content">
                    <p>Each Bitcoin is basically a computer file which is stored in a 'digital wallet' 
                        app on a smartphone or computer. People can send Bitcoins (or part of one) to your digital wallet, 
                        and you can send Bitcoins to other people. Every single transaction is recorded in a public list 
                        called the blockchain.</p>
                </div>
                <div className="title text-capitalize my-3">what is altcoin?</div>
                <div className="content">
                    <p>An <span className="orange">altcoin</span> is any digital cryptocurrency similar to Bitcoin. The term is said to stand 
                        for “alternative to Bitcoin” and is used describe any cryptocurrency that is not a 
                        Bitcoin.</p>
                </div>
                <div className="title text-capitalize my-3">what is ethereum?</div>
                <div className="content">
                    <p>Launched in 2015, <span className="orange">Ethereum</span> is an open-source, blockchain-based, decentralized 
                        software platform used for its own cryptocurrency, ether. It enables 
                        SmartContracts and Distributed Applications (ĐApps) to be built and run without 
                        any downtime, fraud, control, or interference from a third party.</p>
                </div>
                <div className="title text-capitalize my-3">what is the difference between bitcoin and ethereum?</div>
                <div className="content">
                    <p><span className="orange">Ethereum</span> is another cryptocurrency, and one many people see as potentially 
                        overtaking <span className="orange">Bitcoin</span> as the dominant coin in the market. ... The difference between 
                        Ethereum and Bitcoin is the fact that Bitcoin is nothing more than a currency, 
                        whereas Ethereum is a ledger technology that companies are using to build new 
                        programs.</p>
                </div>
                <div className="title text-capitalize my-3">what is ICO?</div>
                <div className="content">
                    <p>An <span className="orange">Initial Coin Offering</span> (ICO) is the 
                        cryptocurrency space's rough equivalent to an IPO in the mainstream investment 
                        world. ICOs act as fundraisers of sorts; a company looking to create a new coin, 
                        app, or service launches an ICO.</p>
                    <p> In an ICO, a quantity of cryptocurrency is sold in the form of "tokens" ("coins") to 
                        speculators or investors, in exchange for legal tender or other cryptocurrencies such 
                        as Bitcoin or Ethereum. The tokens sold are promoted as future functional units of 
                        currency if or when the ICO's funding goal is met and the project launches. 
                        In some cases like Ethereum the tokens are required to use the system for its purposes.</p>
                    <p>An ICO can be a source of capital for startup companies. ICOs can allow startups to avoid regulatory 
                        compliance and intermediaries such as venture capitalists, banks and stock exchanges.</p>
                </div>
                <div className="title text-capitalize my-3">what is IEO?</div>
                <div className="content">
                    <p>An <span className="orange">Initial Exchange Offering</span> (IEO) is a token sale hold on an exchange. 
                    IEO works on different cryptocurrency exchanges depending on how it gets planned. 
                    The exchanges create a platform where the pool of developers can mint and sell the projects 
                    to crypto enthusiasts and investors!</p>
                    <p>Before the token sale gets conducted on the IEO exchange platform, both the exchange team 
                        and the project team will deal with an agreement. The exchange platform will do a thorough 
                        review of the project using certain conditions to make sure the project is worthy authentic.</p>
                    <p>Once the exchange platform is comfortable with the project, it will unveil the date for token sale 
                        along with the fixed price per token. If in case the exchange has its own token, then the contributors 
                        have to purchase the units of tokens before they can participate in Initial Exchange Offering.</p>
                </div>
                <div className="title text-capitalize my-3">what is mining?</div>
                <div className="content">
                    <p><span className="orange">Cryptocurrency Mining</span> or cryptomining, is a process in which 
                    transactions for various forms of cryptocurrency are verified and added to the blockchain digital ledger.</p>
                    <p>Each time a cryptocurrency transaction is made, a cryptocurrency miner is responsible for ensuring 
                        the authenticity of information and updating the blockchain with the transaction. The mining process 
                        itself involves competing with other cryptominers to solve complicated mathematical problems with 
                        cryptographic hash functions that are associated with a block containing the transaction data.</p>
                    <p>The first cryptocurrency miner to crack the code is rewarded by being able to authorize the transaction, 
                        and in return for the service provided, cryptominers earn small amounts of cryptocurrency of their own. 
                        In order to be competitive with other cryptominers, though, a cryptocurrency miner needs a computer with 
                        specialized hardware.</p>
                </div>
            </div>
        </CryptoDictionaryWrapper>
    )
}


const CryptoDictionaryWrapper = styled.div`
    margin-top: 8rem;
    padding: 1rem;
    .orange {
        color: var(--mainOrange)
    }
    .title {
        font-size: 1.5rem;
        font-family: "Yeseva One", sans-serif;
    }
    .heading {
        font-size: 2rem;
        font-family: "Yeseva One", sans-serif;
        border-bottom: solid 5px var(--mainOrange);
    }
    .content {
        font-family: "Arsenal", sans-serif;
        font-size: 1rem;
    }
`