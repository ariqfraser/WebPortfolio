import styled from "@emotion/styled";
import divider from "../assets/dividerLine.svg";
import react from "../assets/icons/react.svg";
import mongo from "../assets/icons/mongo.svg";
import firebase from "../assets/icons/firebase.svg";
import nodejs from "../assets/icons/nodejs.svg";
import { BackgroundText } from "./BackgroundText";


const Section = (props) => {
    const Container = styled("section")({
        width: "80%",
        marginLeft: "10%",
        position: "relative",
        "&>h2": {
            padding: "4em 0",
        },
    });

    const Grid = styled("div")({
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        alignItems: "center",
        gridColumnGap: "",
        rowGap: '4em',
        padding: "0 4em",
        "& > div:nth-of-type(2) > svg": {
            width: "80%",
        },
    });
    return (
        <Container>
            <h2>
                {props.title} {props.title2}
            </h2>
            <BackgroundText>
                {props.title}
                {props.title2 !== undefined ? "\n" : ""}
                <span>{props.title2}</span>
            </BackgroundText>
            <Grid>{props.children}</Grid>
        </Container>
    );
};

export default Section;

export const Card = (props) => {
    const Container = styled("div")({
        gridColumn: "span 1",
        "&>p": {
            maxWidth: "80%",
        },
        "&>img": {
            marginBottom: "1.25em",
            width: "60%",
        },
    });

    const Icons = styled("div")({
        display: "flex",
        fill: "var(--b1)",
        color: "var(--b1)",
        userSelect: "none",
        alignItems: "center",
        "&>img": {
            height: 54,
            margin: "1.5em 12px",
        },
    });

    let icon;

    return (
        <Container>
            <h3>{props.title}</h3>
            <img src={divider} alt="divider" />
            <p>{props.children}</p>
            <Icons>
                {props.icons.map((value, key) => {
                    if (value === "react") icon = react;
                    if (value === "mongo") icon = mongo;
                    if (value === "firebase") icon = firebase;
                    if (value === "nodejs") icon = nodejs;
                    if (value === "express")
                        return (
                            <p
                                style={{
                                    fontFamily: "Open Sans",
                                    fontWeight: 300,
                                    color: "var(--b2)",
                                    fontSize: "2em",
                                }}
                                key={key}
                            >
                                Express
                            </p>
                        );
                    return (
                        <img src={icon} alt={`tech used: ${value}`} key={key} />
                    );
                })}
            </Icons>
        </Container>
    );
};

export const Preview = (props) => {
    const Container = styled("div")({
        gridColumn: "span 2",
    });
    return (
        <Container>
            <h3>{props.title}</h3>
            <p>{props.children}</p>
        </Container>
    );
};
