import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import LinkItem from "../components/LinkItem";
import { headerDelay } from "../animations/AnimationTimingVariables";
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
                <NavLinkContainer
                    className="full-width"
                    initial={{ x: 800 }}
                    animate={{
                        x: 0,
                        transition: {
                            delay: headerDelay,
                        },
                    }}
                >
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

const NavLinkContainer = styled(motion.ul)`
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    row-gap: 0.5rem;
    padding: 1rem 2rem 0;
`

export default Header;