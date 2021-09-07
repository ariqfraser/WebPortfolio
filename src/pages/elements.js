import style from 'styled-components'


export const Section = style.section`
    margin: 0;
    width: 100vw;
    
    padding: 0;

    display: flex;
    overflow: hidden;

    &.center {
        flex-direction: column;
        justify-content: center;
    }

    &.h-100 {
        height: 100vh;
    }

    &.p-10 {
        padding: 0 10% 0 10%;
    }

    h1 {
        color: #292929;
        font-size: 4em;
        margin: 0;
        padding: 0;
        
    }

    h2 {
        color: #292929;
        font-size: 3em;
        margin: 0;
        padding: 0;
        
    }
`

export const ScrollIndicator = style.div`
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: #292929;
    position: fixed;
    bottom: 8vh;
    left: -2vw;
    transform: rotate(90deg);
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;

    div {
        width: 50px;
        height: 1px;
        background-color: #292929;
        margin-left: 8px;
    }
`

export const SkillsWrapper = style.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2% 0;
`

export const SkillCard = style.div`
    width: 150px;
    height: 75px;

    //border: 2px solid rgba(41, 41, 41, 0.3);
    border-radius: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s ease-in-out;
    

    & img {
        height: 80%;
    }

    &.skill {
        opacity: 1;
    }
`

export const SectionHeading = style.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 2em;
    font-weight: 800;
    margin: 0 0 0 2vw;
    padding: 
`

export const SectionAccent = style.div`
    color: #f8f6f8;
    font-size: 12em;
    font-weight: bold;
    padding: 0;
    margin: 0 0 0 16px;
    position: absolute;
    z-index: -2;

`

export const FeatProjects = style.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Project = style.div`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
`

export const PHead = style.div`
    width: 100%;
    display: flex;
    font-size: 18px;

    h4 {
        color: blue;
        display:relative;
        padding: 0;
        margin: 0 auto 0 0;

    }

    svg:nth-child(3) {
        padding: 0 24px 0 8px;
    }




`

export const PContent = style.div`
    width: 25%;
    padding: 0 0 4px;
`

export const PImg = style.img`
    width: 25%;
`