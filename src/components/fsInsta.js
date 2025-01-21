import {Box, Flex, Grid, Text} from "theme-ui";
import React from "react";

export function FsInsta() {
    return (
        <Box
            sx={{
                marginTop: ["4em", "6em"],
            }}
        >
            <Text
                as={"h3"}
                sx={{
                    fontSize: ["4", "5"],
                    textAlign: "center",
                }}
            >
                Vi er på Instagram!
            </Text>
            <Flex
                sx={{
                    alignItems: "center",
                    marginTop: ["2em"],
                }}
            >
                <Grid
                    gap={[0, 4, 4, 4]}
                    columns={[1, 2, 2, 2]}
                    sx={{
                        marginRight: "auto",
                        marginLeft: "auto",
                    }}
                >
                    <iframe
                        width="320"
                        height="460"
                        src="https://www.instagram.com/p/CIp6kV6JNzq/embed"
                        frameBorder="0"
                    />
                    <iframe
                        width="320"
                        height="460"
                        src="https://www.instagram.com/p/BuEWMHjhUZv/embed"
                        frameBorder="0"
                    />
                </Grid>
            </Flex>
        </Box>
    )
}