import React from "react"
import styled from 'styled-components'
import { infos } from "./info"
import Fade from 'react-reveal/Fade'

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    margin: 0 auto;

    @media (max-width: 800px){
        flex-direction: column;
    }
`

export const Illustration = styled.img`
    max-width: 100%;

    @media (max-width: 800px){
        max-width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    height: 100%;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 800px){
        text-align: center;
    }
`

export const Title = styled.h1`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 50px;
    color: #FFFFFF;
`

export const Description = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    color: #FFFFFF;
`

export const CallToAction = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 22px;
    color: #62E0D9;
`

export const ContainerIllustration = styled.div`
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
    }
`

export default function Productive(){
    return(
        <Container>
            {
                infos.map((info) => {
                    return(
                        <>
                            <Fade left>
                                <ContainerIllustration>
                                    <Illustration src = {info.image} />
                                </ContainerIllustration>
                            </Fade>

                            <Fade right>
                                <ContainerInfo>
                                    <Title>{info.title}</Title>
                                    <Description>{info.firstParagraph}</Description>
                                    <Description>{info.secondeParagraph}</Description>
                                    <CallToAction>{info.callToAction}</CallToAction>
                                </ContainerInfo>
                            </Fade>
                        </>
                    )
                })
            }
        </Container>
    )
}