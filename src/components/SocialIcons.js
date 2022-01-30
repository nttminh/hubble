import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled';

function SocialIcons() {
    return <StyledSocialIcons>
        <a href='https://twitter.com'><FaTwitter /></a>
        <a href='https://facebook.com'><FaFacebook /></a>
        <a href='https://linkedin.com'><FaLinkedin /></a>
    </StyledSocialIcons>;
}

export default SocialIcons;
