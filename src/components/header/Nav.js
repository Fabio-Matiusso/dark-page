import React from "react";
import { links } from "./links/links";
import styled from 'styled-components'

const Navigation = styled.nav`
    display: flex;
    list-style: none;

`

const Link = styled.li`
    font-size: 1.2rem;
`

export default function Nav(){
    return(
        <>
            {
                links.map((link) => {
                    return(
                        <Navigation>
                            <Link>{link}</Link>
                        </Navigation>
                    )
                })
            }
        </>
    )
}