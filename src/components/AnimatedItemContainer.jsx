import styled from "styled-components";

//this component is used to hide the overflow of animated elements in TextBlock
const AnimatedItemContainer = ({ component, content, href, format }) => {
    const TagName = component;

    return (
        <ItemContainer className={format} >
            {TagName && (
                <TagName
                    href={href}
                    content={content}
                />
            )}
        </ItemContainer>        
    )
};

const ItemContainer = styled.span`
    display: inline-block;
    width: fit-content;
    height: fit-content;
    overflow: hidden;

    //make title italic
    &.letter {
        transform: skewX(-15deg);
    }

    &.word {
        margin: 0 0.1em;
    }
`

export default AnimatedItemContainer;