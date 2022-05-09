import React from "react"
import { infos } from "./infos"
import Fade from 'react-reveal/Fade';
import {Container, ContainerDeposition, Description, DataUserDeposition, UserImage, NameAndOcupation, Name, Ocupation } from "./styledcomponents";

export default function Depositions(){

    return(
        <Container>
            {
                infos.map((info) => {
                    return(
                        <Fade bottom>
                            <ContainerDeposition>
                                    <Description>{info.description}</Description>
                                    <DataUserDeposition>
                                        <UserImage src = {info.avatar}/>
                                        <NameAndOcupation>
                                            <Name>{info.name}</Name>
                                            <Ocupation>{info.ocupation}</Ocupation>
                                        </NameAndOcupation>
                                    </DataUserDeposition>
                            </ContainerDeposition>
                        </Fade>
                    )
                })
            }
        </Container>
    )

}