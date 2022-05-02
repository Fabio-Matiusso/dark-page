import React from "react";
import styled from 'styled-components'
import Logo from '../../images/logo.svg'
import Nav from "./Nav";


const HeaderStyled = styled.header`
    max-width: 1280px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 40px;
    align-items: center;
    padding-right: 40px;
    padding-left: 40px;
`

const LogoHeader = styled.img`
    width: 120px;
    height: 40px;
`

const ContainerNav = styled.div`
    display: flex;
    gap: 30px;
`

export default function Header(){
    return(
        <HeaderStyled>
            <LogoHeader src = {Logo} />
            <ContainerNav>
                <Nav />
            </ContainerNav>
        </HeaderStyled>
    )
}