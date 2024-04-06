import styled from "styled-components";
import AnimatedItemContainer from "./AnimatedItemContainer";
import AnimatedTextItem from "./AnimatedTextItem";

const TextBlockTitle = ({ title, tag }) => {
    const textArray = title.trim().split(" ");

    return (
        <TitleContainer>
            {textArray.map((content, index) => 
                <AnimatedItemContainer key={content+index} component={AnimatedTextItem} content={content} tag="h1" />
            )}
        </TitleContainer>
    )
};

const TitleContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 1.5rem 0;
`

export default TextBlockTitle;