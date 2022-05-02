import React from "react";
import { links } from "./links/links";
import { Navigation, Link } from "./styledcomponents";

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