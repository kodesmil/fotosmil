import {Container, Text} from "theme-ui";
import {FsPictures} from "./fsPictures";
import React from "react";

export function FsFooterPictures(props) {
    return (
        <Container
            id="team"
            anchor="team"
            sx={{
                marginTop: ["4em", "8em"],
            }}
        >
            <Text
                as={"h3"}
                sx={{
                    fontSize: ["4", "5"],
                    textAlign: "center",
                    marginBottom: "1em",
                }}
            >
                🦸‍♂️ 🦸‍♀️ Vårt Team 🦸‍♂️ 🦸‍♀️
            </Text>
            <FsPictures pictures={props.pictures}/>
        </Container>
    )
}