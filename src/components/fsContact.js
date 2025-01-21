import {Box, Button, Text} from "theme-ui";
import {Link} from "gatsby";
import React from "react";

export function FsContact() {
    return (
        <Box
            anchor="contact"
            sx={{
                marginTop: ["4em", "8em"],
                marginLeft: ["5%", "10%", "15%"],
                marginRight: ["5%", "10%", "15%"],
            }}
            id="contact"
            name="contact"
        >
            <Text
                as={"h1"}
                sx={{
                    fontSize: ["4", "5"],
                    textAlign: "center",
                }}
            >
                Lurer du på noe?
            </Text>
            <Text
                as={"div"}
                sx={{
                    fontSize: ["3"],
                    textAlign: "center",
                    marginTop: "8px",
                }}
            >
                Skriv oss en melding!
            </Text>
            <Link
                style={{
                    textAlign: "center",
                    display: "block",
                    marginRight: "auto",
                    marginLeft: "auto",
                    marginTop: "1em",
                }}
                href="mailto:fotosmil.trondheim@gmail.com?subject=Info about Photo Booth&body=Please tell us more about your celebrations and the date of your event:"
            >
                fotosmil.trondheim@gmail.com
            </Link>
            <Link
                style={{
                    textAlign: "center",
                    display: "block",
                    marginRight: "auto",
                    marginLeft: "auto",
                    marginTop: "1em",
                }}
                href="tel:+47 92125656"
            >
                +47 92125656
            </Link>
            <Text
                as={"div"}
                sx={{
                    fontSize: ["3"],
                    textAlign: "center",
                    marginTop: "8px",
                }}
            >
                eller
            </Text>
            <Button
                style={{
                    textAlign: "center",
                    display: "block",
                    marginRight: "auto",
                    marginLeft: "auto",
                    marginTop: "1em",
                }}
                onClick={() => {
                    window.open("https://meetings-eu1.hubspot.com/foto-smil")
                }}
            >
                Avtale Video Møtet
            </Button>
        </Box>
    )
}