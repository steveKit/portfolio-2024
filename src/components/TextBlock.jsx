import styled from "styled-components";
import { motion } from "framer-motion";
import LearnMoreButton from "./LearnMoreButton";
// import textBlockContent from "../data/TextBlockContent.json"; 
// import TextBlockIndexIndicator from "./TextBlockIndexIndicator";

const TextBlock = ({title, body, href}) => {
    
    return (
        <TextWrapper
            layout="textContentChange"
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            exit={{ visibility: "hidden" }}
        >
            <h1>{title}</h1>
            <p>{body}</p>
            <LearnMoreButton href={href} />
            {/* <IndicatorsWrapper>
                {textBlockContent.map((_, index) => (
                    <TextBlockIndexIndicator
                        key={index}
                        currentIndex={currentIndex}
                        index={index}
                        indicatorClickHandler={indicatorClickHandler}
                    />
                ))}
            </IndicatorsWrapper> */}
        </TextWrapper>  
    )
};

const TextWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;

    width: 950px;
    min-width: 40%;
    max-width: 90%;
    text-align: center;
`

// const IndicatorsWrapper = styled.div`
//     display: flex;
//     padding-top: 1.5rem;
//     gap: 1.5rem;
// `

export default TextBlock;