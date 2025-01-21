import {Box, Heading, Text} from "theme-ui";
import React from "react";

export function FsSmile() {
    return (
        <Box
            sx={{
                marginTop: ["2em", "3em"],
                marginBottom: ["2em", "3em"],
            }}
        >
            <Text
                as={"p"}
                sx={{
                    textAlign: "center",
                    fontSize: ["3", "4"],
                }}
            >
                Målet vårt er å bidra til et hav av smil og skape god stemning overalt!
            </Text>
            <Heading
                sx={{
                    marginTop: "0.5em",
                    fontSize: ["5", "6"],
                    textAlign: "center",
                }}
            >
                🥳 🍻 🎉 📸 🍾 🥂 🥳
            </Heading>
        </Box>
    )
}