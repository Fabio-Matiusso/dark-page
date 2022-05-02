import React from "react"
import styled from 'styled-components'
import { infos } from "./infos"
import Fade from 'react-reveal/Fade'

const ContainerBenefits = styled.section`
    display: flex;
    max-width: 800px;
    margin: 0 auto;
    flex-wrap: wrap;
`

const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    height: 300px;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media(max-width: 800px){
        margin: 0 auto;
    }
`

const Image = styled.img`
    width: 104px;
    height: 104px;
    margin: 0 auto;
`

const Title = styled.h3`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
`

const Description = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    max-width: 80%;
    margin: 0 auto;
`

export default function Benefits(){
    return(
        <ContainerBenefits>
            {
                infos.map((info) => {
                    return(
                        <ContainerInfo>
                            <Fade top>
                                <Image src = {info.image} />
                                <Title>{info.title}</Title>
                                <Description>{info.description}</Description>
                            </Fade>
                        </ContainerInfo>
                    )
                })
            }
        </ContainerBenefits>
    )
}