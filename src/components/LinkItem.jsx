import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const LinkItem = ({ title, href, isActive, setIsActive }) => {
    const [isHovered, setIsHovered] = useState(false);
    //ref used to resize underline motion.div to the width of active menu item
    const linkRef = useRef(null);
    const [linkWidth, setLinkWidth] = useState(0);

    useEffect(() => {
        const updateWidthAndPath = () => {
            if (linkRef.current) {
                const newWidth = linkRef.current.offsetWidth;
            
                setLinkWidth(newWidth);
            }
        };

        // Call initially and setup ResizeObserver
        updateWidthAndPath();
        const resizeObserver = new ResizeObserver(updateWidthAndPath);
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
        <StyledLi>
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
                layoutId='underline'
                style={{
                    position: 'absolute',
                    top: '46px',
                    width: `${linkWidth}px`,
                    height: '1px',
                    backgroundColor: 'var(--off-white)',
                }}
                transition={{ duration: 0.3 }}
            />
            )}
        </StyledLi>            
    )
};

const StyledLi = styled.li`
    color: var(--off-white);

    /* Adds a slash after each link except the last one */
    &:not(:last-child)::after {
        content: "/";
        position: absolute;
        translate: 9px;
        font-size: 1.7rem;
    }
`

const StyledLink = styled(Link)`
    font-size: 1.7rem;
`

export default LinkItem;