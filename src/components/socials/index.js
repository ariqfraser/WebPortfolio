import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import {TopNav, Link, SocialLink, SocialWrap, NavWrap, LiLi} from './socials.elements'
import {withStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core'


const CustomButton = withStyles({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: "50%",
      border: 0,
      color: "white",
      height: "50px",
      width: "50px",
      minWidth: "0",
      padding: "0",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    },
    label: {
      textTransform: "capitalize",
      padding: 0,
      margin: 0
    }
  })(Button);

const Socials = () => {

    window.addEventListener('scroll', (e) => {
        
        let links = document.querySelectorAll('.social-link');
        
        // links[0].classList.toggle('social-1', window.scrollY < 50);
        // links[0].classList.toggle('scrolled', window.scrollY > 0);
        // links[1].classList.toggle('social-2', window.scrollY < 50);
        // links[1].classList.toggle('scrolled', window.scrollY > 0);
        // links[2].classList.toggle('social-3', window.scrollY < 50);
        // links[2].classList.toggle('scrolled', window.scrollY > 0);
        
        
    });

    return (
        <>
            {/* <SocialWrap className="social-link social-1"><SocialLink variant="outlined" color="secondary" ><LinkedInIcon /></SocialLink></SocialWrap>
            <SocialWrap className="social-link social-2"><SocialLink variant="outlined" color="secondary" ><GitHubIcon /></SocialLink></SocialWrap>
            <SocialWrap className="social-link social-3"><SocialLink variant="outlined" color="secondary" ><MailIcon /></SocialLink></SocialWrap> */}
            {/* <CustomButton>CV</CustomButton>  */}

            <TopNav>
                <Link className="name">ARIQ FRASER</Link>
                <NavWrap>
                    <LiLi><LinkedInIcon /> </LiLi>
                    <LiLi><GitHubIcon /> </LiLi>
                    <LiLi><MailIcon /> </LiLi>
                </NavWrap>
            </TopNav>
        </>
    )
}

export default Socials
