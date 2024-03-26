import styled from "styled-components";

const TextBlock = ({title, body}) => {
    
    return (
        <TextWrapper>
            <h1>{title}</h1>
            <p>{body}</p>
        </TextWrapper>            
    )
};

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 750px;
    min-width: 33%;
    text-align: center;
`

export default TextBlock;