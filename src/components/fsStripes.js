import {Box, Grid} from "theme-ui";
import {GatsbyImage} from "gatsby-plugin-image";
import React from "react";

export function FsStripes(props) {
    return (
        <Box sx={{width: ["90%", "75%"], mx: "auto", mt: "4em"}}>
            <Grid
                gap="0.25em"
                columns={[3, 6]}
                sx={{
                    background: "white",
                    boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
                }}
            >
                {props.pictures.nodes.map((picture, i) => (
                    <GatsbyImage
                        key={i}
                        imgStyle={{
                            objectFit: "cover",
                        }}
                        image={picture.childImageSharp.gatsbyImageData}
                        alt=""
                    />
                ))}
            </Grid>
        </Box>
    )
}