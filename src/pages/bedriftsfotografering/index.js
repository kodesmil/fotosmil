import {graphql} from "gatsby"
import React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Box, Flex, IconButton, Text,} from "theme-ui"
import InstagramIcon from "../../components/instagram"
import SEO from "../../components/seo"
import {StyledBackgroundSection} from "../../components/styledBackgroundSection"
import {FsTobBar} from "../../components/fsTobBar";
import {FsInsta} from "../../components/fsInsta";
import {FsContact} from "../../components/fsContact";
import {FsLogos} from "../../components/fsLogos";
import {FsFooter} from "../../components/fsFooter";
import {FsFooterPictures} from "../../components/fsFooterPictures";
import {FsSmile} from "../../components/fsSmile";
import {MyDropdown2} from "../../components/myDropdown2";

function FsHeader() {
    return (
        <StyledBackgroundSection
            sx={{
                paddingTop: ["1em", "4em"],
                boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
            }}
        >
            <Box
                sx={{
                    width: ["90%", "80%", "70%"],
                    paddingTop: ["8em", "10em"],
                    paddingBottom: ["8em", "10em"],
                    mx: "auto",
                }}
            >
                <Text
                    as={"h1"}
                    sx={{
                        color: "white",
                        marginTop: "1em",
                        textShadow: "2px 2px 10px black",
                        lineHeight: "1",
                        fontSize: ["5", "6"],
                        textAlign: "center",
                    }}
                >
                    Tilbud om Bedriftsfotografering fra FotoSmil
                </Text>
                <Text
                    as={"p"}
                    sx={{
                        color: "white",
                        marginTop: "1em",
                        textShadow: "2px 2px 10px black",
                        fontSize: ["4", "5"],
                        textAlign: "center",
                    }}
                >
                    Perfekt for å skape morsomme minner fra alle typer arrangementer:
                    firmafest, bryllup, barnefest, studentarrangement, julebord,
                    konferanse, konfirmasjon, bursdag, jubileum, sommerfest, konsert eller
                    messe!
                </Text>
            </Box>
        </StyledBackgroundSection>
    )
}

function FsBedriftOffer() {
    return <Box as={'main'} sx={{
        width: ["90%", "80%", "45%"],
        marginTop: '2rem',
        paddingX: '1rem',
        justifyItems: "center",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        justifySelf: "center",
    }}>
        <Text as={'p'}
              sx={{
                  fontSize: ["3", "4"],
                  marginBottom: '3rem'
              }}
        >FotoSmil er en profesjonell fotografitjeneste basert i Trondheim, med erfaring fra områder som skolefoto og
            fotobokstjenester. Nå tilbyr vi også bedriftsfotografering for å fange essensen av din bedrift gjennom
            profesjonelle bilder.</Text>
        <Text href="/Tilbud-Fotosmil.pdf" as={"a"} download sx={{
            fontSize: ["3", "4"],
        }}>
            Last ned fil med Bedriftsfotografering Tilbud
        </Text>
        <Text as={'h2'} sx={{
            marginTop: ['2em'],
            listStyleType: "none",
            fontSize: ["4", "5"],
            fontWeight: "bold",
            justifySelf: "start"
        }}>Våre Bedriftsfotograferingstilbud</Text>
        <Box>
            <Text as={'li'} sx={{
                marginTop: ['2em'],
                listStyleType: "none",
                fontSize: ["3", "4"],
                fontWeight: "bold",
            }}>Portrettfoto av Ansatte</Text>
            <Text as={'p'} sx={{
                fontSize: ["3", "4"],
                marginTop: '0.5rem'
            }}
            >Profesjonelle portretter med enhetlig bakgrunn og belysning, perfekte for nettsider og markedsføring. Vi
                sørger for at alle føler seg komfortable foran kameraet.</Text>
            <Text as={'li'} sx={{
                marginTop: "1em",
                listStyleType: "none",
                fontSize: ["3", "4"],
                fontWeight: "bold",
            }}>Gruppebilder</Text>
            <Text as={'p'} sx={{
                fontSize: ["3", "4"],
                marginTop: '0.5rem'
            }}
            >Bilder av team, avdelinger eller grupper – tatt på kontoret, utendørs eller en ønsket lokasjon</Text>
            <Text as={'li'} sx={{
                marginTop: "1em",
                listStyleType: "none",
                fontSize: ["3", "4"],
                fontWeight: "bold",
            }}>Miljøbilder</Text>
            <Text as={'p'} sx={{
                fontSize: ["3", "4"],
                marginTop: '0.5rem'
            }}
            >Vi fanger bedriftens hverdagsliv, kultur og verdier med autentiske bilder av arbeidsmiljøet, feltarbeid,
                interaksjoner mellom ansatte samt bygningens interiør og eksteriør.</Text>
        </Box>
        <Text as={'h2'} sx={{
            marginTop: ['2em'],
            listStyleType: "none",
            fontSize: ["4", "5"],
            fontWeight: "bold",
            justifySelf: "start"
        }}>Fordeler ved Profesjonell Bedriftsfotografering</Text>
        <Box>
            <Text as={'li'} sx={{
                marginTop: ['1em', '2em'],
                listStyleType: "none",
                fontSize: ["3", "4"],
                fontWeight: "bold",
            }}>Styrket Visuell Profil</Text>
            <Text as={'p'} sx={{
                fontSize: ["3", "4"],
                marginTop: '0.5rem'
            }}
            >Profesjonelle bilder forbedrer bedriftens visuelle profil og gir et godt førsteinntrykk hos potensielle
                kunder og partnere.</Text>
            <Text as={'li'} sx={{
                marginTop: "1em",
                listStyleType: "none",
                fontSize: ["3", "4"],
                fontWeight: "bold",
            }}>Økt Synlighet</Text>
            <Text as={'p'} sx={{
                fontSize: ["3", "4"],
                marginTop: '0.5rem'
            }}
            >Kvalitetsbilder øker synligheten på digitale plattformer som nettsider og sosiale medier, og bidrar til økt
                engasjement og interesse for bedriften din.</Text>
            <Text as={'li'} sx={{
                marginTop: "1em",
                listStyleType: "none",
                fontSize: ["3", "4"],
                fontWeight: "bold",
            }}>Enhetlig Presentasjon</Text>
            <Text as={'p'} sx={{
                fontSize: ["3", "4"],
                marginTop: '0.5rem'
            }}>Ensartede bilder av ansatte og miljø skaper et profesjonelt og helhetlig uttrykk som styrker bedriftens
                identitet, teamfølelse og positive arbeidsmiljø.</Text>
        </Box>
        <Text as={'h2'} sx={{
            marginTop: ['2em'],
            listStyleType: "none",
            fontSize: ["4", "5"],
            fontWeight: "bold",
            justifySelf: "start"
        }}>Hvorfor velge FotoSmil?</Text>
        <Box>
            <Text as={'li'} sx={{
                marginTop: ['2em'],
                listStyleType: "none",
                fontSize: ["3", "4"],
                fontWeight: "bold",
            }}>Fleksibilitet og Tilpasning</Text>
            <Text as={'p'} sx={{
                fontSize: ["3", "4"],
                marginTop: '0.5rem'
            }}
            >Vi forstår at hver bedrift har unike behov. Derfor tilbyr vi skreddersydde løsninger og er fleksible med
                tid og sted for fotograferingen, slik at resultatet blir optimalt for din bedrift.</Text>
            <Text as={'li'} sx={{
                marginTop: "1em",
                listStyleType: "none",
                fontSize: ["3", "4"],
                fontWeight: "bold",
            }}>Enkelt og greit!</Text>
            <Text as={'p'} sx={{
                fontSize: ["3", "4"],
                marginTop: '0.5rem'
            }}
            >Vi tilbyr fotografering til en avtalt pris uten skjulte kostnader. Kundene våre får full tilgang til alle
                bildene og kan bruke dem fritt uten ekstra kostnader. Vi har alltid kundetilfredshet i fokus.</Text>
        </Box>
        <Text as={'p'} sx={{
            marginTop: ['2em'],
            marginBottom: ['1em', '2em'],
            fontSize: ["3", "4"],
        }}
        >Vi ser frem til å samarbeide med dere og bidra til å løfte deres visuelle profil. Ta gjerne kontakt for å
            avtale en fotografering eller et uforpliktende møte for å få mer informasjon om våre tjenester. Og ja, vi
            fortsetter med vår populære fotoboksen!</Text>
        <Text href="/Tilbud-Fotosmil.pdf" as={"a"} download sx={{
            fontSize: ["3", "4"],
        }}>
            Last ned fil med Bedriftsfotografering Tilbud
        </Text>
    </Box>
}

const BlogIndex = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title
    return (
        <div>
            <SEO title={siteTitle}/>
            <FsTobBar>
            <StaticImage width={48} src="./logo.png" alt="Fotosmil Trondheim"/>
                <Flex sx={{flexDirection: ["column", "row"]}}>
                    <Text
                        as={"h4"}
                        sx={{
                            marginLeft: ["1em"],
                            fontWeight: [600, 600],
                            fontSize: [1, 2],
                        }}
                    >
                        FotoSmil Trondheim
                    </Text>
                    <Text
                        as={"h4"}
                        sx={{
                            marginLeft: ["1em"],
                            fontWeight: [500, 500],
                            fontSize: [1, 2],
                        }}
                    >
                        Fotograferingstjenester
                    </Text>
                </Flex>
                <Box sx={{flex: "1 1 auto"}}/>
                <IconButton
                    sx={{
                        width: "40px",
                        height: "40px",
                    }}
                    onClick={() => {
                        window.open("https://www.instagram.com/fotosmil.trondheim")
                    }}
                >
                    <InstagramIcon/>
                </IconButton>
                <MyDropdown2/>
            </FsTobBar>
            <FsHeader background={data.background}/>
            <FsSmile/>
            <FsBedriftOffer/>
            <FsContact/>
            <FsInsta/>
            <FsLogos logos={data.logos}/>
            <FsFooterPictures pictures={data.pictures}/>
            <FsFooter/>
        </div>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        features {
          logo
          heading
          description
        }
      }
    }
    logos: allFile(
      sort: { fields: [relativePath] }
      filter: { relativePath: { regex: "/partners/" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            quality: 50
            height: 100
            transformOptions: { grayscale: false }
          )
        }
      }
    }
    pictures: allFile(
      sort: { fields: [relativePath] }
      filter: { relativePath: { regex: "/parties//" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            quality: 25
          )
        }
      }
    }
    stripes: allFile(
      sort: { fields: [relativePath] }
      filter: { relativePath: { regex: "/stripes//" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
    joana: allFile(
      sort: { fields: [relativePath] }
      filter: { relativePath: { regex: "/joana//" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            quality: 25
            height: 200
          )
        }
      }
    }
  }
`
