import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const LinkItem = ({ title, href, isActive, setIsActive }) => {
    const [isHovered, setIsHovered] = useState(false);
    //ref used to resize underline motion.div to the width of active menu item
    const linkRef = useRef(null);
    const [linkPosition, setLinkPosition] = useState({
        width: null,
        top: null,
    });

    useEffect(() => {
        const updateLinkPosition = () => {
            if (linkRef.current) {
                const newWidth = linkRef.current.offsetWidth;
                const newTop = linkRef.current.offsetTop + linkRef.current.offsetHeight + (linkRef.current.offsetHeight / 20);

                setLinkPosition({ width: newWidth, top: newTop });
            }
        };

        updateLinkPosition();
        const resizeObserver = new ResizeObserver(updateLinkPosition);
        if (linkRef.current) {
            resizeObserver.observe(linkRef.current);
        }

        window.addEventListener('resize', updateLinkPosition);

        return () => {
            if (linkRef.current) {
                resizeObserver.unobserve(linkRef.current);
            }
            window.removeEventListener('resize', updateLinkPosition);
        };
    }, []);
    
    return (
        <StyledLi>
            <StyledLink 
                ref={linkRef}
                to={href}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}           
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => isActive === title ? null : setIsActive(title)}
            >
                {title}
            </StyledLink>
            {isActive === title && (
                <motion.div
                layoutId='underline'
                style={{
                    position: 'absolute',
                    top: `${linkPosition.top}px`,
                    width: `${linkPosition.width}px`,
                    height: '1px',
                    backgroundColor: 'white',
                }}
                transition={{ duration: 0.2 }}
            />
            )}
        </StyledLi>            
    )
};

const StyledLi = styled.li`
    color: white;

    /* Adds a slash after each link except the last one */
    &:not(:last-child)::after {
        content: "/";
        position: absolute;
        translate: 7px;
    }
`

const StyledLink = styled(Link)`

    
    @media (max-width: 300px) {
        font-size: 0.8rem;
    }
`

export default LinkItem;