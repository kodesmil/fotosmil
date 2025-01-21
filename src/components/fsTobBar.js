import {Flex} from "theme-ui";
import React from "react";

export function FsTobBar(props) {
    return (
        <Flex
            sx={{
                paddingLeft: ["5%", "10%", "15%"],
                paddingRight: ["5%", "10%", "15%"],
                alignItems: "center",
                py: "0.5em",
                top: 0,
                width: `100%`,
                background: `#ffeeff`,
                position: `sticky`,
                zIndex: `100000`,
                boxShadow: "0px 0.5px 20px rgba(0,0,0,0.1)",
            }}
            as="nav"
        >
            {props.children}
        </Flex>
    )
}