import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    return (
        <Footer>
            <div className="text">Copyright© 2019. All rights reserved.</div>
        </Footer>
    )
}


const Footer = styled.div`
    padding: 0.3rem;
    width:100%;
    background: var(--mainOrange);
    box-shadow: inset 0px 4px 2px -2px darkgrey;
    .text{
        color: black;
        text-align: center;
    }
`