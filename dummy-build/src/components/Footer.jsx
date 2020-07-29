import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const StyledFooter = styled.footer`
    width: 100%;
    background-color: rgba(144, 146, 145, 0.616);
    display: flex;
    justify-content: center;
    font-size: 1.25rem;
    margin-bottom: 0;
    margin-top: 15%;

    .circle {
        height: 60px;
        width: 60px;
        background: linear-gradient(45deg,#22a6b3,#30336b);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin: .5%;
        transition: background-color 1s;

            &:hover {
                transition: background-color 1s;
            }
    }

    .icons {
        margin: 0;
        transition: 0.3s ease-in;
        height: 30px;
        width: 30px;
        z-index: -1;
        color: white;

        &:hover {
            transform: scale(1.5);
        }
    }

    a {
        color: white;
    }

`

export default function Footer(){

    

    return (
        <StyledFooter>
            <IconContext.Provider value={{className: 'icons'}}>
            <div className='circle'>
                <a href='https://www.facebook.com' rel='noopener noreferrer' target='_blank'><FaFacebook /></a>
            </div>

            <div className='circle'>
                <a href='https://www.twitter.com' rel='noopener noreferrer' target='_blank'><FaTwitter /></a>
            </div>

            <div className='circle'>
                <a href='https://www.instagram.com' rel='noopener noreferrer' target='_blank'><FaInstagram /></a>
            </div>

            <div className='circle'>
                <a href='https://www.github.com/the-bw-expat-journal' rel='noopener noreferrer' target='_blank'><FaGithub /></a>
            </div>
            </IconContext.Provider>
        </StyledFooter>
    )
}