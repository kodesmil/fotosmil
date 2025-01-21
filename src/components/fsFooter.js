import {Box, Container, Text} from "theme-ui";
import {Link} from "gatsby";
import React from "react";

export function FsFooter() {
    return (
        <Box
            sx={{
                marginTop: ["1em"],
            }}
        >
            <Container>
                <Text
                    as={"div"}
                    sx={{
                        marginTop: "1em",
                        fontSize: ["3"],
                        textAlign: "center",
                    }}
                >
                    Made with ♥ in Trondheim by{" "}
                    <Link href="https://kodesmil.com">Kodesmil</Link>
                </Text>
            </Container>
        </Box>
    )
}