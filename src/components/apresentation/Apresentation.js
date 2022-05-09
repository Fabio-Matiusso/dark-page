import React from "react"
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { info } from "./info";
import { ContainerApresentation, ContainerInfo, Illustration, StyledTitle, StyledDescription, StyledButton } from "./styledcomponents";

export default function Apresentation(){
     return(
         <ContainerApresentation>
             {
                 info.map((data) => {
                     return(
                         <Fade left>
                             <ContainerInfo>
                                <Illustration src = {data.image} />
                                <StyledTitle>{data.title}</StyledTitle>
                                <StyledDescription>{data.description}</StyledDescription>
                                <StyledButton>{data.textButton}</StyledButton>
                             </ContainerInfo>
                         </Fade>
                     )
                 })
             }
         </ContainerApresentation>
     )
}