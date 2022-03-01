import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import logo from "../assets/logoSVG.svg";
import { Link } from "react-router-dom";

const Nav = () => {
    const Container = styled("nav")({
        zIndex: 3,

        display: "flex",
        position: "fixed",
        alignItems: "center",
        padding: "1em 2vw",
        width: "96vw",
        "&:hover > div ": {
            marginTop: '0 !important',
            
        },
    });

    const LinkWrapper = styled('div')({
        display: "flex",
        marginLeft: 'auto',
        transition: "500ms ease-in-out",
        marginTop: '0',
        "& > a > div": {
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#fff",
            outline: "none",
            border: "2px solid var(--b3)",
            borderRadius: "3px",
            padding: "4px 8px",
            backgroundColor: "var(--b3)",
            transition: "200ms ease-in-out",
            "&:hover": {
                color: "var(--b3)",
                backgroundColor: "transparent",
            },
        },
        "& > a": {
            margin: "0 3em",
            fontSize: "1em",
            textDecoration: "none",
            color: "#fff",
            "&:hover": { color: "var(--b1)" },
            transition: "300ms ease-in-out",
        },
        
    })

    return (
        <Container>
            <img
                src={logo}
                width="60px"
                alt="Ariq Fraser Logo - Click to go to top"
            />
            <LinkWrapper id='NavLinks'>
                <a href="#12">Projects</a>
                <Link to="">About</Link>
                <Link to="">Contact</Link>
                <Link to="">
                    <div>Resume</div>
                </Link>
            </LinkWrapper>
        </Container>
    );
};

export default Nav;
