import styled from "styled-components";

const TextBlockIndexIndicator = ({ isActive }) => {
    
    return (
        <Indicator className={isActive ? "active-index" : "" } />            
    )
};

const Indicator = styled.div`
    width: 100px;
    height: 8px;
    border-radius: 3px;
    background-color: var(--off-white);
    opacity: 0.25;

    &.active-index {
        opacity: 0.80;
    }
`;


export default TextBlockIndexIndicator;