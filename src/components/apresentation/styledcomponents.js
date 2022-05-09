import styled from 'styled-components'


export const ContainerApresentation = styled.section`
    max-width: 734px;
    height: 800px;
    margin: 0 auto;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`

export const Illustration = styled.img`
    max-width: 620px;
    max-height: 340px;
    margin: 0 auto;

    @media (max-width: 500px){
        max-height: 250px;
    }
`

export const StyledTitle = styled.h1`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 60px;
    text-align: center;
    color: #FFFFFF;
`

export const StyledDescription = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
`

export const StyledButton = styled.div`
    cursor: pointer;
    width: 280px;
    height: 56px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(138.1deg, #63E1D9 -49.34%, #34A0CD 100%);
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.15925);
    border-radius: 28px;
    margin: 0 auto;
`