import React from 'react';
import { Container } from './styles/Container.styled';
import { Nav, StyledHeader } from './styles/Header.styled'

function Header() {
    return <StyledHeader bg='red'>
        <Container>
            <Nav>
                <Logo />
                <Button>Try it Free</Button>
            </Nav>
        </Container>
    </StyledHeader>;
}

export default Header;
