import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import TextBlock from "../components/TextBlock";
import textBlockContent from "../data/TextBlockContent.json"; 
import TextBlockIndexIndicator from "../components/TextBlockIndexIndicator";
import { intervalDelay } from "../animations/AnimationTimingVariables";
const Home = () => {
    const colorArray = [
        'bg-teal',
        // 'bg-dull-green',
        'bg-yellow',
        // 'bg-brown',
        'bg-lavender',
        'bg-red'
    ];

    const [backgroundColor, setBackgroundColor] = useState('bg-teal');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState(textBlockContent[currentIndex]);
    //for user triggered content cycle in useeffect
    const [userTriggeredContentChange, setUserTriggeredContentChange] = useState(false);
 
    //get different background color from colorArray
    const getNewColor = () => {
        let newColor;
        do {
            newColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        } while (newColor === backgroundColor);
        return newColor;
    };

    //cycle through textBlockContent
    const cycleContent = (index) => {
        const newIndex = index !== undefined ? index : (currentIndex + 1) % textBlockContent.length;
        setCurrentText(textBlockContent[newIndex]);
        setBackgroundColor(getNewColor());
        setCurrentIndex(newIndex);
    };
    
    //user triggered change clickHandler
    const indicatorClickHandler = (index) => {
        setUserTriggeredContentChange(true);
        cycleContent(index);
    };


    useEffect(() => {

        const contentChangeInterval = setInterval(() => {
            if (userTriggeredContentChange) {
                setUserTriggeredContentChange(false);
            }
            
            cycleContent();

        }, (intervalDelay * 1000));

        return () => clearInterval(contentChangeInterval);
    }, [currentIndex, userTriggeredContentChange]);

    return(
        <HomeWrapper
            animate={{ backgroundColor: `var(--${backgroundColor})`}}
            transition={{ duration: 0.3 }}
            layout="textContentChange"
        >
            <AnimatePresence>
                {currentText && (
                    <TextBlock
                        key={currentIndex}
                        title={currentText.title}
                        body={currentText.content}
                        href={currentText.href}
                    />
                )}
            </AnimatePresence>

            <IndicatorsWrapper>
                {textBlockContent.map((_, index) => (
                    <TextBlockIndexIndicator
                        key={index}
                        currentIndex={currentIndex}
                        index={index}
                        indicatorClickHandler={indicatorClickHandler}
                    />
                ))}
            </IndicatorsWrapper>
        </HomeWrapper>
    )
}

const HomeWrapper = styled(motion.section)`
    width: 100vw;
    height: 100vh;
    opacity: 0.80;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const IndicatorsWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding-top: 1.5rem;
    gap: 1.5rem;
`

export default Home;