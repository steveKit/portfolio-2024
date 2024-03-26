import styled from "styled-components";

const TextBlockIndexIndicator = ({ isActive }) => {
    
    return (
        <Indicator className={isActive ? "active-index" : "" } />            
    )
};

const Indicator = styled.button`
    width: 100px;
    height: 8px;
    border-radius: 3px;
    border: none;
    background-color: white;
    opacity: 0.25;

    &.active-index {
        opacity: 1;
    }

    &:hover {
        cursor: pointer;
    }
`;


export default TextBlockIndexIndicator;