import styled from "styled-components";
import AnimatedItemContainer from "./AnimatedItemContainer";
import AnimatedTextItem from "./AnimatedTextItem";

const TextBlockTitle = ({ title }) => {
    const textArray = title.trim().split(" ");

    return (
        <TitleContainer>
            {textArray.map((word, wordIndex) => 
                <Word
                    key={`${word}${wordIndex}`}
                >
                    {[...word].map((letter, letterIndex) =>
                        <AnimatedItemContainer
                            key={`${letter}${letterIndex}`}
                            component={AnimatedTextItem}
                            content={letter}
                            format="letter"
                        />
                    )}
                </Word>
            )}
        </TitleContainer>
    )
};

const Word = styled.span`
    display: flex;
    margin: 0 0.3rem;
`

const TitleContainer = styled.h1`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
    margin: 1rem 0;
`

export default TextBlockTitle;