import styled from 'styled-components'


export const Container = styled.section`
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

export const ContainerDeposition = styled.div`
    display: flex;
    flex-direction: column;
    background: #202A3C;
    box-shadow: 5px 5px 8px 4px rgba(56, 56, 56, 0.0991282);
    border-radius: 3px;
    max-width: 360px;
    height: 200px;
    justify-content: space-evenly;
`

export const Description = styled.p`
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

export const DataUserDeposition = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    gap: 10px;
`

export const UserImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 16px;
`

export const NameAndOcupation = styled.div`
    display: flex;
    flex-direction: column;
    height: 30px;
    justify-content: space-between;
`

export const Name = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 12px;
    letter-spacing: 0.5px;
    color: #FFFFFF;
`

export const Ocupation = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 0.6rem;
    line-height: 10px;
    letter-spacing: 0.5px;
    color: #FFFFFF;
`