import React from 'react';
import styled from 'styled-components';
import logo from '../public/img/Bitcoinia3.png';

export default function Footer() {
    return (
        <Footer>
            <div className="text">Copyright© 2019. <span><img src={logo} alt="bitcoinia logo"/></span> All rights reserved.</div>
        </Footer>
    )
}


const Footer = styled.div`
    padding: 0.3rem;
    width:100%;
    background: var(--blueGreen);
    box-shadow: inset 0px 4px 2px -2px darkgrey;
    .text{
        color: black;
        text-align: center;
        font-size: 1rem;
    }
    img {
        height: 30px;
    }
    span {
        padding: 0.5rem;
    }
`