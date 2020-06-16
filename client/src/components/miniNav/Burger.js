import React from 'react'
import styled from 'styled-components'

const HamburgerIcon = styled.button`
    outline: none;
    border: none;
    background-color: ${props => props.theme.colors.lightBlue};
    box-sizing: content-box;
    color: ${props => props.theme.colors.white};
    height: 5rem;
    width: 5rem;
    display: block;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    position: fixed;
    top: 1rem;
    right: 1rem;
    opacity: 1;
    z-index: 1000000;
    cursor: pointer;
    @media(min-width: 1000px) {
        display: none;
    }
    &~i {
        font-size: 2.2rem;
    }
`

export default function Burger({onClick, open}) {
    return (
        <HamburgerIcon onClick={() => onClick(!open)}>
            <i style={{fontSize: '2.4rem'}} className="fas fa-bars"></i>
        </HamburgerIcon>
    )
}
