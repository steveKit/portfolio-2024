import styled from "styled-components";
import AnimatedItemContainer from "./AnimatedItemContainer";
import AnimatedTextItem from "./AnimatedTextItem";

const TextBlockBody = ({ body }) => {
    const textArray = body.trim().split(" ");

    return (
        <BodyContainer>
            {textArray.map((content, index) => 
                <AnimatedItemContainer
                    key={content+index}
                    component={AnimatedTextItem}
                    content={content}
                    format="word"
                />
            )}
        </BodyContainer>
    )
};

const BodyContainer = styled.p`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 1rem 0;
`

export default TextBlockBody;