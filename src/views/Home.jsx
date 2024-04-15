import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import TextBlock from "../components/TextBlock";
import textBlockContent from "../data/TextBlockContent.json"; 
import TextBlockIndexIndicator from "../components/TextBlockIndexIndicator";
import { textBlockAnimationInterval } from "../animations/AnimationTimingVariables";
import { initialLoadVariants } from "../animations/AnimationVariants";
import useCycleContent from "../custom-hooks/useCycleContent";
import useBackgroundColor from "../custom-hooks/useBackgroundColor";
import colorArray from "../data/colorArray";

const Home = () => {
    const [
            currentText,
            currentIndex,
            cycleContent
        ]
        = useCycleContent(
            textBlockContent
    );

    const [backgroundColor, updateBackGroundColor] = useBackgroundColor("bg-teal", colorArray);
    
    //user triggered change clickHandler
    const indicatorClickHandler = (index) => {
        cycleContent(index);
        updateBackGroundColor();
    };

    return(
        <HomeWrapper
            animate={{ backgroundColor: `var(--${backgroundColor})`}}
            transition={{ delay: (textBlockAnimationInterval / 2), duration: 0.3 }}
            exit={{ opacity: 0 }}
            layout="textContentChange"
        >
            <AnimatePresence>
                {currentText && (
                    <TextBlock
                        key={"textblock"+currentIndex}
                        title={currentText.title}
                        body={currentText.content}
                        href={currentText.href}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                <IndicatorsWrapper
                    initial="initial"
                    animate="animate"
                    exit="exit"
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
            </AnimatePresence>
        </HomeWrapper>
    )
}

const HomeWrapper = styled(motion.section)`
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
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