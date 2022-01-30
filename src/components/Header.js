import React from 'react';
import { Container } from './styles/Container.styled';
import { Logo, Nav, StyledHeader } from './styles/Header.styled'
import { Button } from './styles/Button.styled'


function Header() {
    return <StyledHeader bg='red'>
        <Container>
            <Nav>
                <Logo src='./images/logo.svg' alt='logo' />
                <Button>Try it Free</Button>
            </Nav>
        </Container>
    </StyledHeader>;
}

export default Header;
