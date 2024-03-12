import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
const Home = () => {
    const colorArray = [
        'sage',
        'olive',
        'teal',
        'lime',
        'yellow',
        'red',
        'mauve'
    ];

    const [backgroundColor, setBackgroundColor] = useState('yellow');

    useEffect(() => {
        const colorChangeInterval = setInterval(() => {
            const getNewColor = () => {
                let newColor;
                do {
                    newColor = colorArray[Math.floor(Math.random() * colorArray.length)];
                } while (newColor === backgroundColor);
                return newColor;
            };

            setBackgroundColor(getNewColor());

            // Clear interval on component unmount
            return () => clearInterval(colorChangeInterval);

        }, 9000);
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
    opacity: 0.90;
`

export default Home;