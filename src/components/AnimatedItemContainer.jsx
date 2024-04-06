import styled from "styled-components";

//this component is used to hide the overflow of animated elements in TextBlock
const AnimatedItemContainer = ({ component, content, tag, href }) => {
    const TagName = component;
    console.log(content);

    return (
        <ItemContainer>
            <TagName href={href} content={content} tag={tag} />
        </ItemContainer>        
    )
};

const ItemContainer = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 0.1rem 0.5%;
    overflow: hidden;
`

export default AnimatedItemContainer;