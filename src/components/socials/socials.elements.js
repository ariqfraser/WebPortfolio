import styled from 'styled-components'
import {Button} from '@material-ui/core'

export const SocialLink = styled(Button)`
    min-width: 0 !important;
    width: 50px !important;
    height: 50px !important;
    border-radius: 50% !important;
    transition: all 0.5s ease-in-out;
`

export const SocialWrap = styled.div`
    
    position: fixed;
    transition: all 0.5s ease-in-out;

    &.social-1 {
        top: 25px;
        left: 25px;
    }
    &.social-2 {
        top: 85px;
        left: 25px;
    }
    &.social-3 {
        top: 145px;
        left: 25px;
    }

    &.scrolled {
        
    }
    
`

export const TopNav = styled.nav`
    position: fixed;
    width: 90%;
    top: 36px;
    left: 5%;
    display: flex;
    justify-content: space-between;
    color: #292929;
    text-decoration: none;

    
    
`

export const Link = styled.a`
    font-size: 16px;
    &.name {
        font-size: 1rem;
    }
`

export const NavWrap = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
`
export const LiLi = styled.li`
    font-size: 16px;
    margin: 0 16px;
`