import React from 'react'
import Socials from '../components/socials'
import {Section, ScrollIndicator, SkillsWrapper, SkillCard, SectionHeading, SectionAccent} from './elements'
import '../App.css'
import cssImg from '../img/css.png'
import htmlImg from '../img/html5.png'
import jsImg from '../img/js.png'
import phpImg from '../img/php.png'
import sqlImg from '../img/sql.png'
import reactImg from '../img/react.png'
import aiImg from '../img/ai.png'
import psImg from '../img/ps.png'
import xdImg from '../img/xd.png'


const index = () => {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let jobList = [
        "developer",
        "designer",
        "logo maker",
        "Ariq"
    ];

    async function ChangeJob() {
        await sleep(1000);
        for (var i = 0; i < 3; i++){
            await sleep(1000);
            var prefix;
            var job;
            switch (i){
                case 0:
                    prefix = "a web ";
                    job = jobList[i];
                    break;
                case 1:
                    prefix = "a "
                    job = "web " + jobList[i];
                    break;
                case 2:
                    prefix = "";
                    job = "a "+ jobList[i];
                    break;
                default:
                    break;
            }
            
            
            for (var ii = 0; ii <= job.length; ii++){
                await sleep(100); 
                var newJob = job.substring(0, job.length - ii);
                document.getElementById("job").innerHTML = prefix + newJob;
            }

            switch (i){
                case 0:
                    prefix = "a web ";
                    job = jobList[i];
                    break;
                case 1:
                    prefix = "a ";
                    job = jobList[i];
                    break;
                case 2:
                    prefix = "";
                    job = jobList[i];
                    break;
                default:
                    prefix = "";
                    job = jobList[i];
                    break;
            }

            
            for (ii = 0; ii <= jobList[i+1].length; ii++){
                await sleep(100);
                newJob = jobList[i+1].substring(0, 0 + ii);
                document.getElementById("job").innerHTML = prefix + newJob;
            }
        }

        await sleep(500);
        document.getElementById("subHeading").style.opacity = 1;
        // document.getElementById("subHeading").style.marginTop = 0;
    }

    ChangeJob();

    window.addEventListener('scroll', (e) => {
        console.log(window.scrollY);
        if (window.scrollY > 0) {
            document.getElementById("scrollIndicator").style.opacity = 0;
        } else {
            document.getElementById("scrollIndicator").style.opacity = 1;
        }
    });

    return (
        <>
            <Socials />
            <Section className="center p-20 h-100">
                <div style={{padding: "0 15%"}} id="topHeadings">
                    <h1>Hi, I'm <span id="job">a web developer</span><span id="cursor">|</span></h1>
                    <h2 id="subHeading">welcome to my portfolio.</h2>
                </div>
                <ScrollIndicator id="scrollIndicator">Scrolldown <div></div></ScrollIndicator>
                {/* <Canvas camera={{ position: [0, 0, 0], near: 0.1, far: 1000 }}>

                
                </Canvas> */}
            </Section>

            <Section className="center ">
                <SectionHeading>my skills</SectionHeading>
                {/* <SectionAccent>my skills.</SectionAccent> */}
                <SkillsWrapper>
                    <SkillCard className="skill"><img src={cssImg} alt="I am skilled in css"></img></SkillCard>
                    <SkillCard className="skill"><img src={htmlImg} alt="I am skilled in html"></img></SkillCard>
                    <SkillCard className="skill"><img src={jsImg} alt="I am skilled in JavaScript"></img></SkillCard>
                    <SkillCard className="skill"><img src={phpImg} alt="I am skilled in PhP"></img></SkillCard>
                    <SkillCard className="skill"><img src={sqlImg} style={{height: '100%'}} alt="I am skilled in SQL"></img></SkillCard>
                    <SkillCard className="skill"><img src={reactImg} alt="I am skilled in REACT"></img></SkillCard>
                    <SkillCard className="skill"><img src={aiImg} alt="I am skilled in Adobe Illustrator"></img></SkillCard>
                    <SkillCard className="skill"><img src={psImg} alt="I am skilled in Adobe Photoshop"></img></SkillCard>
                    <SkillCard className="skill"><img src={xdImg} alt="I am skilled in Adobe Xd"></img></SkillCard>

                </SkillsWrapper>
            </Section>
            
            <Section className="h-100 p-10" id="skills">
                
            </Section>

            
        </>
    )
}

export default index