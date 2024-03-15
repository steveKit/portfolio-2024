import { useState } from "react";
import styled from "styled-components";
import LinkItem from "../subcomponents/LinkItem";
const Header = () => {
    const menuItems = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "About",
            href: "/about"
        }
    ];
    const [isActive, setIsActive] = useState('Home');

    return(
        <header>
            <nav>
                <NavLinkContainer>
                    {menuItems.map((item, index) => (
                        <LinkItem
                            key={item.title + index}
                            title={item.title}
                            href={item.href}
                            isActive={isActive}
                            setIsActive={setIsActive}
                        />
                    ))}
                </NavLinkContainer>
            </nav>
        </header>
    )
}

const NavLinkContainer = styled.ul`
    display: flex;
    gap: 2rem;
    padding-right: 2rem;
`

export default Header;