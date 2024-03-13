import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
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

        }, 9000);

        // Clear interval on component unmount
        return () => clearInterval(colorChangeInterval);
        
    }, [backgroundColor]);

    return(
        <HomeWrapper
            as={motion.div}
            animate={{ backgroundColor: `var(--${backgroundColor})`}}
            transition={{ duration: 0.2 }}
        >

        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    opacity: 0.85;
`

export default Home;