import {Box, Text} from "theme-ui";
import React from "react";

export function FsPricing() {
    return (
        <Box
            id="pricing"
            anchor="pricing"
            sx={{
                mx: "auto",
                paddingTop: ["4em", "8em"],
                width: ["80%", "60%", "60%", "37%"],
            }}
        >
            <Text
                as={"h3"}
                sx={{
                    fontSize: ["4", "5"],
                    textAlign: "center",
                }}
            >
                Pris? La oss holde det enkelt!
            </Text>
            <Text
                as={"h2"}
                sx={{
                    fontSize: ["3", "4"],
                    textAlign: "center",
                }}
            >
                Vi har laveste fastpris...
            </Text>
            <div>
                <Text
                    as={"div"}
                    sx={{
                        fontSize: ["3"],
                        marginTop: "1em",
                        textAlign: "center",
                    }}
                >
                    kr. 5700,- for de første to timene og kr. 1900,- per ekstra time.
                </Text>
                <Text
                    as={"div"}
                    sx={{
                        fontSize: ["2"],
                        textAlign: "center",
                        fontStyle: "italic",
                    }}
                >
                    For eksempel 3 timer er kr. 7600,- og 4 timer er kr. 9500,-
                </Text>
            </div>
        </Box>
    )
}
