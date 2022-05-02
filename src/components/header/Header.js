import React from "react";
import Logo from '../../images/logo.svg'
import Nav from "./Nav";
import { HeaderStyled, LogoHeader, ContainerNav } from "./styledcomponents";


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