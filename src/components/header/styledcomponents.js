import styled from 'styled-components'

/*STYLED COMPONENTES DO HEADER*/ 

export const HeaderStyled = styled.header`
    max-width: 1280px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 40px;
    align-items: center;
    padding-right: 40px;
    padding-left: 40px;

    @media(max-width: 800px){
        max-width: 100%;
    }
`

export const LogoHeader = styled.img`
    width: 120px;
    height: 40px;

    @media(max-width: 800px){
        max-width: 90px;
        height: 30px;
    }
`

export const ContainerNav = styled.div`
    display: flex;
    gap: 30px;
`

/*STYLED COMPONENTS DO NAV*/

export const Navigation = styled.nav`
    display: flex;
    list-style: none;

`

export const Link = styled.li`
    font-size: 1.2rem;

    @media (max-width: 780px) {
        font-size: 1rem;
    }
`