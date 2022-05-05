import React from "react"
import styled from 'styled-components'
import { infos } from "./infos"
import Fade from 'react-reveal/Fade';

const Container = styled.section`
    max-width: 1180px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 259px;

    @media (max-width: 1200px){
        flex-direction: column;
        gap: 30px;
        align-items: center;
    }

    @media (max-width: 800px){
        height: 1200px;
        justify-content: center;
    }
`

const ContainerDeposition = styled.div`
    display: flex;
    flex-direction: column;
    background: #202A3C;
    box-shadow: 5px 5px 8px 4px rgba(56, 56, 56, 0.0991282);
    border-radius: 3px;
    max-width: 360px;
    height: 200px;
    justify-content: space-evenly;
`

const Description = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 21px;
    letter-spacing: 0.5px;
    color: #FFFFFF;
    max-width: 80%;
    margin: 0 auto;
`

const DataUserDeposition = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    gap: 10px;
`

const UserImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 16px;
`

const NameAndOcupation = styled.div`
    display: flex;
    flex-direction: column;
    height: 30px;
    justify-content: space-between;
`

const Name = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 12px;
    letter-spacing: 0.5px;
    color: #FFFFFF;
`

const Ocupation = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 0.6rem;
    line-height: 10px;
    letter-spacing: 0.5px;
    color: #FFFFFF;
`


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