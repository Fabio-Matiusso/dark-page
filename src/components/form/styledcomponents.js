import styled from 'styled-components'

export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
max-width: 860px;
margin: 0 auto;
text-align: center;
height: 300px;
justify-content: center;
gap: 25px;

@media (max-width: 1200px){
    justify-content: flex-end;
    height: 700px;
}

@media (max-width: 800px){
    height: 20px;
}


`

export const Title = styled.h1`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 2rem;
line-height: 48px;
color: #FFFFFF;
`

export const Description = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 21px;
text-align: center;
color: #FFFFFF;
max-width: 80%;
margin: 0 auto;
`

export const InputAndButton = styled.div`
display: flex;
justify-content: space-evenly;

@media (max-width: 500px){
    flex-direction: column;
    gap: 20px;
}
`

export const Input = styled.input`
background: #FFFFFF;
box-shadow: 2px 3px 6px rgba(7, 4, 59, 0.157043);
border-radius: 24px;
width: 60%;
height: 48px;

@media (max-width: 500px){
    margin: 0 auto;
}
`

export const Button = styled.div`
background: linear-gradient(129.57deg, #63E1D9 -26.63%, #34A0CD 100%);
box-shadow: 2px 3px 6px rgba(7, 4, 59, 0.157043);
border-radius: 24px;
width: 200px;
height: 48px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

@media (max-width: 500px){
    margin: 0 auto;
}
`