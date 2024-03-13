import { useState } from "react";
import styled from "styled-components";
import LinkItem from "../subcomponents/LinkItem";
const Header = () => {
    const [isActive, setIsActive] = useState('');

    return(
        <header>
            <NavContainer>
                <LinkItem title="Home" href="/" />
                <LinkItem title="About" href="/about" />
            </NavContainer>
        </header>
    )
}

const NavContainer = styled.nav`
    display: flex;
    gap: 1rem;
    padding-right: 2rem;
`

export default Header;