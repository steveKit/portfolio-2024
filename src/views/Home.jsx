import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import TextBlock from "../components/TextBlock";
import textBlockContent from "../data/TextBlockContent.json"; 
import TextBlockIndexIndicator from "../components/TextBlockIndexIndicator";
import { initialLoadVariants, backgroundColorVariant } from "../animations/AnimationVariants";
import useCycleContent from "../custom-hooks/useCycleContent";
import { useBackgroundColorContext } from "../context/BackgroundColorContext";

const Home = () => {
    const [
            currentText,
            currentIndex,
            cycleContent
        ]
        = useCycleContent(
            textBlockContent
    );

    const { backgroundColor } = useBackgroundColorContext();
    const homeWrapperVariants = backgroundColorVariant(backgroundColor);

    const indicatorClickHandler = (index) => {
        cycleContent(index);
    };

    return(
        <HomeWrapper
            initial="initial"
            animate="animate"
            exit="exit"
            variants={homeWrapperVariants}
        >
            <AnimatePresence>
                {currentText && (
                    <TextBlock
                        key={"textblock" + currentIndex}
                        title={currentText.title}
                        body={currentText.content}
                        href={currentText.href}
                    />
                )}
            </AnimatePresence>
            <IndicatorsWrapper
                variants={initialLoadVariants}
            >
                {textBlockContent.map((_, index) => (
                    <TextBlockIndexIndicator
                        key={"indicator"+index}
                        currentIndex={currentIndex}
                        index={index}
                        indicatorClickHandler={indicatorClickHandler}
                    />
                ))}
            </IndicatorsWrapper>
        </HomeWrapper>
    )
}

const HomeWrapper = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    opacity: 0.95;
    background-color: ${props => `var(${props.backgroundColor})`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const IndicatorsWrapper = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-flow: row wrap;
    bottom: 5%;
    margin: 0 5%;
`

export default Home;