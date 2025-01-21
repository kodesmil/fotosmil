import {Box, Flex, MenuButton, NavLink} from "theme-ui";
import {Menu} from "@headlessui/react";
import React from "react";

export function MyDropdown() {
    return (
        <Box>
            <Menu>
                <Menu.Button
                    style={{
                        background: "transparent",
                        borderColor: "transparent",
                    }}
                >
                    <MenuButton/>
                </Menu.Button>
                <Menu.Items style={{position: "relative"}}>
                    <Flex
                        sx={{
                            position: "absolute",
                            width: "max-content",
                            flexDirection: "column",
                            gap: "0.5em",
                            background: "white",
                            borderRadius: "1em",
                            boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
                            right: "10px",
                            paddingX: "2em",
                            paddingY: "1em",
                        }}
                    >
                        <Menu.Item>
                            {({active}) => (
                                <NavLink href="#fotograf">Fotograf i Trondheim</NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <NavLink href="/bedriftsfotografering">Bedriftsfotografering Tilbud</NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <NavLink href="#offer">Photobooth Tilbud</NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => <NavLink href="#pricing">Pris</NavLink>}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => <NavLink href="#contact">Kontakt</NavLink>}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <NavLink href="https://meetings-eu1.hubspot.com/foto-smil">
                                    Avtale Video Møtet
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => <NavLink href="#team">Vårt Team</NavLink>}
                        </Menu.Item>
                    </Flex>
                </Menu.Items>
            </Menu>
        </Box>
    )
}