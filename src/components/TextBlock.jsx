import styled from "styled-components";
import LearnMoreButton from "./LearnMoreButton";

const TextBlock = ({title, body}) => {
    
    return (
        <>
            <TextWrapper>
                <h1>{title}</h1>
                <p>{body}</p>
            </TextWrapper> 
            <LearnMoreButton />     
        </>      
    )
};

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 950px;
    min-width: 40%;
    max-width: 90%;
    text-align: center;
`

export default TextBlock;