import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import TextBlock from "../components/TextBlock";
import textBlockContent from "../data/TextBlockContent.json"; 
import TextBlockIndexIndicator from "../components/TextBlockIndexIndicator";

const Home = () => {
    const colorArray = [
        'bg-neon-yellow',
        'bg-teal',
        'bg-lime',
        'bg-yellow',
        'bg-orange',
        'bg-red'
    ];

    const [backgroundColor, setBackgroundColor] = useState('sage-gray');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState(textBlockContent[currentIndex]);

    useEffect(() => {
        const colorChangeInterval = setInterval(() => {
            //get different background color from colorArray at colorChangeInterval
            const getNewColor = () => {
                let newColor;
                do {
                    newColor = colorArray[Math.floor(Math.random() * colorArray.length)];
                } while (newColor === backgroundColor);
                return newColor;
            };

            setBackgroundColor(getNewColor());

            // Update currentText to the next entry in textBlockContent
            setCurrentIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % textBlockContent.length;
                setCurrentText(textBlockContent[nextIndex]);
                return nextIndex;
            });

        }, 10000);

        // Clear interval on component unmount
        return () => clearInterval(colorChangeInterval);
        
    }, [backgroundColor]);

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
    /* position: absolute;
    bottom: 10%; */
    display: flex;
    padding-top: 2rem;
    gap: 1.5rem;    
`

export default Home;