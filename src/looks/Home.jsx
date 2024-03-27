import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import TextBlock from "../components/TextBlock";
import textBlockContent from "../data/TextBlockContent.json"; 
import TextBlockIndexIndicator from "../components/TextBlockIndexIndicator";

const Home = () => {
    const colorArray = [
        // 'bg-neon-yellow',
        'bg-teal',
        'sage-gray',
        'bg-yellow',
        // 'bg-orange',
        'bg-red'
    ];

    //interval delay in seconds
    const intervalDelay = 10;

    const [backgroundColor, setBackgroundColor] = useState('sage-gray');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState(textBlockContent[currentIndex]);
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
            as={motion.div}
            animate={{ backgroundColor: `var(--${backgroundColor})`}}
            transition={{ duration: 0.3 }}
        >
            <TextBlock title={currentText.title} body={currentText.content} />
            <IndicatorsWrapper>
                {textBlockContent.map((_, index) => (
                    <TextBlockIndexIndicator
                        key={index}
                        isActive={index === currentIndex}
                        index={index}
                        indicatorClickHandler={indicatorClickHandler}
                        intervalDelay={intervalDelay}
                    />
                ))}
            </IndicatorsWrapper>
        </HomeWrapper>
    )
}

const HomeWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    opacity: 0.85;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const IndicatorsWrapper = styled.div`
    display: flex;
    padding-top: 1.5rem;
    gap: 1.5rem;
`

export default Home;