import {Container, Grid, Text} from "theme-ui";
import {GatsbyImage} from "gatsby-plugin-image";
import React from "react";

export function FsLogos(props) {
    return (
        <Container
            sx={{
                marginTop: ["4em", "8em"],
            }}
        >
            <Text
                as={"h3"}
                sx={{
                    fontSize: ["4", "5"],
                    textAlign: "center",
                }}
            >
                Kundene våre
            </Text>
            <Grid
                gap="3em"
                columns={[3, 6]}
                sx={{
                    alignItems: "center",
                    alignContent: "center",
                    background: "white",
                    marginTop: ["2em"],
                    paddingX: ["2em", "4em", "8em"],
                    paddingY: ["2em", "4em"],
                }}
            >
                {props.logos.nodes.map((logo, i) => (
                    <GatsbyImage
                        key={i}
                        imgStyle={{
                            objectFit: "contain",
                        }}
                        image={logo.childImageSharp.gatsbyImageData}
                        alt=""
                    />
                ))}
            </Grid>
        </Container>
    )
}