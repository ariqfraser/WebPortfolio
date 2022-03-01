import React from "react";
import styled from "@emotion/styled";
import { BackgroundText } from "./BackgroundText";
import divider from '../assets/dividerLine.svg'
import Socials from "./Socials";

const About = () => {
    const Container = styled("section")({
        width: "80%",
        marginLeft: "10%",
        marginTop: '5em',
        marginBottom: '5em',
        position: "relative",
        "&>h2": {
            padding: "1em 0 4em 0",
        },
    });

    const Grid = styled("div")({
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridColumnGap: "2em",
        padding: "0 4em",
        "& > div:nth-of-type(2) > svg": {
            width: "80%",
        },
    });

    const RightSide = styled('div')({
        gridColumn: 'span 2',

    })

    const center = {
        col: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        row: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }



    return (
        <Container>
            <h2>about</h2>
            <BackgroundText words='1'>about</BackgroundText>
            <Grid>
                <div style={{height: 400, width: 300, backgroundColor: 'var(--b3)'}}>image</div>
                <RightSide>
                    <div style={center.col}>
                        <h3>AboutMe</h3>
                        <img src={divider} alt='divider' width='30%' style={{marginBottom: '1em'}}/>
                    </div>
                    <p>Et veniam nisi aliqua commodo ad cillum commodo ullamco voluptate. Proident ad exercitation nostrud sunt aute tempor enim aute duis adipisicing fugiat voluptate. Veniam adipisicing exercitation sint ad aliquip commodo aliquip ex do veniam labore consectetur quis ex. Irure anim quis dolore veniam. Est consectetur do pariatur occaecat esse fugiat occaecat nostrud amet laborum culpa. Pariatur dolor ipsum ad ut tempor proident aliqua velit quis. Id excepteur adipisicing occaecat incididunt labore fugiat fugiat deserunt sit dolore consequat.</p>
                    <Socials />
                    <div style={center.row}>
                        <div style={{width: '8px', height: '8px', borderRadius: 8, backgroundColor: 'var(--b2)', margin: '16px 8px'}}/>
                        <div style={{width: '8px', height: '8px', borderRadius: 8, backgroundColor: 'var(--b2)', margin: '16px 8px'}}/>    
                        <div style={{width: '8px', height: '8px', borderRadius: 8, backgroundColor: 'var(--b2)', margin: '16px 8px'}}/>
                    </div>
                    <h4>Skills</h4>
                    <h4>Currently Learning</h4>
                </RightSide>
            </Grid>
        </Container>
    );
};

export default About;
