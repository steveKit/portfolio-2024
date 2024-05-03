import styled from "styled-components";
import { motion } from "framer-motion";
const InitialLoad = () => {

    return (
        <Background
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ delay: 0.2, duration: 0.2 }}
        />      
    )
};

const Background = styled(motion.div)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: var(--bg-teal);
    opacity: 0.95;
`

export default InitialLoad;