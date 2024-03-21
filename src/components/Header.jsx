import { useState } from "react";
import styled from "styled-components";
import LinkItem from "../subcomponents/LinkItem";
const Header = () => {
    const menuItems = [
        {
            title: "HOME",
            href: "/"
        },
        {
            title: "ABOUT",
            href: "/"
        },
        {
            title: "SKILLS",
            href: "/"
        },
        {
            title: "WORK",
            href: "/"
        },
        {
            title: "LEARNING",
            href: "/"
        },
        {
            title: "CONTACT",
            href: "/"
        }
    ];
    const [isActive, setIsActive] = useState('HOME');

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
    gap: 1.5rem;
    padding-top: 1rem;
    padding-right: 2rem;
`

export default Header;