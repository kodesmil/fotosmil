import {Box, Text} from "theme-ui";
import React from "react";

export function FsFotograf() {
    return (
        <Box
            id="fotograf"
            anchor="fotograf"
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
                Fotograf i Trondheim
            </Text>
            <div>
                <Text
                    as={"p"}
                    sx={{
                        fontSize: ["3"],
                        marginTop: "1em",
                        textAlign: "center",
                    }}
                >
                    Trenger du en fotograf til bedrifts- eller eventfotografering?
                </Text>
                <Text
                    as={"p"}
                    sx={{
                        fontSize: ["3"],
                        marginTop: "1em",
                        textAlign: "center",
                    }}
                >
                    Kanskje ønsker du å få tatt profesjonelle portretter, barnebilder,
                    familieportretter, graviditetsbilder eller forevige viktige øyeblikk
                    under konfirmasjon eller bryllup?
                </Text>
                <Text
                    as={"p"}
                    sx={{
                        fontSize: ["3"],
                        marginTop: "1em",
                        textAlign: "center",
                    }}
                >
                    Vi gjør dette på en lett og behagelig måte.
                </Text>
                <Box sx={{
                    alignSelf: "center",
                    justifySelf: "center",
                    marginTop: ["1em", "2em"],
                }}>
                <Text
                    as={"a"}
                    href={"/bedriftsfotografering"}
                    sx={{
                        marginTop: ["1em", "2em"],
                        fontSize: ["3"],
                        textAlign: "center",
                    }}
                >
                    Tilbud om Bedriftsfotografering fra FotoSmil
                </Text>
                </Box>
            </div>
        </Box>
    )
}