import React from "react";
import linkedin from '../assets/icons/linkedin.svg'
import mail from '../assets/icons/mail.svg'
import github from '../assets/icons/github.svg'
import styled from "@emotion/styled";

const Socials = (props) => {
    const Links = styled("div")({
        display: "flex",
        justifyContent: props.align === 'left' ? '' : "center",
        alignItems: "center",
        marginTop: '1em',
        "& > a": {
            margin: "0 0.5em",
            "& > img": {
                width: "2.5em",
            },
        },
    });
    return (
        <Links>
            <a href="https://github.com/ariqfraser" target={"_blank"} rel="noreferrer">
                <img src={github} alt="GitHub: ariqfraser" />
            </a>
            <a href="mailto:ariqfraser@gmail.com" target={"_blank"} rel="noreferrer">
                <img src={mail} alt="email: ariqfraser@gmail.com" />
            </a>
            <a href="https://www.linkedin.com/in/ariqfraser/" target={"_blank"} rel="noreferrer">
                <img src={linkedin} alt="linkedin: Ariq Fraser" />
            </a>
        </Links>
    );
};

export default Socials;
