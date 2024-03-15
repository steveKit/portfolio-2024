import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const LinkItem = ({ title, href, isActive, setIsActive }) => {
    const [isHovered, setIsHovered] = useState(false);
    //linkRef used to resizeunderline motion.div to the width of active menu item
    const linkRef = useRef(null);
    const [linkWidth, setLinkWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            setLinkWidth(linkRef.current ? linkRef.current.offsetWidth : 0);
        };

        updateWidth();

        const resizeObserver = new ResizeObserver(updateWidth);
        if (linkRef.current) {
            resizeObserver.observe(linkRef.current);
        }

        return () => {
            if (linkRef.current) {
                resizeObserver.unobserve(linkRef.current);
            }
        };
    }, [linkRef.current]);

    return (
        <li>
            <StyledLink 
                ref={linkRef}
                to={href}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}           
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsActive(title)}
            >
                {title}
            </StyledLink>
            {isActive === title && (
                <motion.div 
                    layoutId="underline"
                    style={{
                        position: 'absolute',
                        width: `${linkWidth}px`,
                        height: '2px',
                        backgroundColor: 'black',
                    }}
                />
            )}
        </li>            
    )
};

const StyledLink = styled(Link)`
    /* Adds a slash after each link except the last one */
    &::after {
        content: "/";
        position: absolute;
        color: black;
        font-size: 24px;
    }

    /* Removes the slash from the last link */
    &:last-child::after {
        content: none;
    }
`

export default LinkItem;