import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import logo from '../assets/logoSVG.svg';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';

const Nav = () => {
    const Container = styled('nav')({
        zIndex: 3,

        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100vw',
        backgroundColor: 'var(--black)',
        bottom: 0,
    });

    const MenuBtn = styled(IconButton)({
        color: 'var(--b1)',
        fill: 'var(--b1)',
        width: 50,
        height: 50,
    });

    return (
        <Container>
            {/* <img
                src={logo}
                width="60px"
                alt="Ariq Fraser Logo - Click to go to top"
            /> */}
            <MenuBtn>
                <HomeIcon />
            </MenuBtn>
            <MenuBtn>
                <FormatListBulletedIcon />
            </MenuBtn>
            <MenuBtn>
                <MailIcon />
            </MenuBtn>
            <MenuBtn>
                <PersonIcon />
            </MenuBtn>
        </Container>
    );
};

export default Nav;
