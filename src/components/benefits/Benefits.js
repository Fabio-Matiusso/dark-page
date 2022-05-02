import React from "react"
import styled from 'styled-components'
import { infos } from "./infos"
import Fade from 'react-reveal/Fade'
import {ContainerBenefits, ContainerInfo, Image, Title, Description } from "./styledcomponents"

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