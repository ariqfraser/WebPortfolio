import React, { useEffect } from "react";
import linkedin from "../assets/icons/linkedin.svg";
import mail from "../assets/icons/mail.svg";
import github from "../assets/icons/github.svg";
import styled from "@emotion/styled";

const SocialNav = () => {

    const Link = styled("a")({
        position: "fixed",
        height: 46,
        display: "flex",
        alignItems: 'center',
        transition: '400ms ease-in-out',
        '&>img':{

        }
    });
    return (
        <>
            <Link
                id="socialGithub"
                href="https://github.com/ariqfraser"
                target={"_blank"}
                rel="noreferrer"
            >
                <img src={github} alt="GitHub: ariqfraser" />
            </Link>
            <Link
                id="socialMail"
                href="mailto:ariqfraser@gmail.com"
                target={"_blank"}
                rel="noreferrer"
            >
                <img src={mail} alt="email: ariqfraser@gmail.com" />
            </Link>
            <Link
                id='socialLinkedIn'
                href="https://www.linkedin.com/in/ariqfraser/"
                target={"_blank"}
                rel="noreferrer"
            >
                <img src={linkedin} alt="linkedin: Ariq Fraser" />
            </Link>
        </>
    );
};

export default SocialNav;
