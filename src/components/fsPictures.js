import {Grid} from "theme-ui";
import {GatsbyImage} from "gatsby-plugin-image";
import React from "react";

export function FsPictures(props) {
    return (
        <Grid
            gap="0"
            columns={[2, 3, 3, 6]}
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
    )
}