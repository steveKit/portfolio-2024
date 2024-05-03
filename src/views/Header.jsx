import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useBackgroundColor from "../custom-hooks/useBackgroundColor";
import styled from "styled-components";
import LinkItem from "../components/LinkItem";
import { initialLoadVariants } from "../animations/AnimationVariants";
import navItems from "../data/navItems";
const Header = () => {

    const [isActive, setIsActive] = useState({
        title: "HOME",
        href: "/",
        bgColor: "--bg-teal"
    });

    const newBackgroundColor = useBackgroundColor();

    useEffect(() => {
        const {bgColor} = isActive;
        newBackgroundColor(bgColor);
    }, [isActive]);

    return(
        <header>
            <nav>
                <NavLinkContainer
                    className="full-width"
                    initial="initial"
                    animate="animate"
                    variants={initialLoadVariants}
                >
                    {navItems.map((item, index) => (
                        <LinkItem
                            key={item.title + index}
                            item={item}
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

    @media (max-width: 300px) {
        padding: 1rem;
    }
`

export default Header;