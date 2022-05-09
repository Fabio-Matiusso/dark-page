import React from "react"
import styled from 'styled-components'
import { infos } from "./info"
import Fade from 'react-reveal/Fade'
import { Container, ContainerIllustration, Illustration, ContainerInfo, Title, Description, CallToAction } from "./styledcomponents"

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