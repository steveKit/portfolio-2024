import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkItem = ({ title, href }) => {
    const [isHovered, setIsHovered] = useState(false);
    console.log(isHovered)
    return (
        <StyledLink
                to={href}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}           
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                hovered={isHovered.toString()}
            >
                {title}
        </StyledLink>        
    )
};

const StyledLink = styled(Link)`
    &:hover, &:focus {
        text-decoration: underline; // Example hover/focus style
    }
    
    // Apply active class style dynamically based on isHovered prop
    ${({ hovered }) => hovered && `
        color: #007bff; // Change color on hover
        text-decoration: underline; // Another way to indicate active/hover state
    `}
`

export default LinkItem;