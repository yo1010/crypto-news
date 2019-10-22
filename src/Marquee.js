import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Marquee extends Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js";
        script.async=true;
        document.body.appendChild(script)
    }
    render() {
        return (
            <div class="header">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 data">
                            <coingecko-coin-price-marquee-widget currency="eur" coin-ids="bitcoin,ethereum,dascoin,litecoin,ripple,eos,dash" locale="en" vce-ready=""></coingecko-coin-price-marquee-widget>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
