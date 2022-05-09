import React from "react";
import Fade from 'react-reveal/Fade'
import { Button, ContainerForm, Title, Description, InputAndButton, Input } from "./styledcomponents";

export default function Form(){
    return(
        <Fade bottom>
            <ContainerForm>
                <Title>Get early access today</Title>
                <Description>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</Description>
                <InputAndButton>
                    <Input />
                    <Button>Get Started For Free</Button>
                </InputAndButton>
            </ContainerForm>
        </Fade>
    )
}