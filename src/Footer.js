import React from 'react';
import styled from 'styled-components';
import logo from '../public/img/Bitcoinia3.png';

export default function Footer() {
    return (
        <FooterWrapper>
            <div className="text">Copyright© 2019. <span><img src={logo} alt="bitcoinia logo"/></span> All rights reserved.</div>
        </FooterWrapper>
    )
}


const FooterWrapper = styled.div`
    padding: 0.3rem;
    width:100%;
    background: rgb(248,248,248);
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