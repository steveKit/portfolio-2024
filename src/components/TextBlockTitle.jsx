import styled from "styled-components";
import { motion } from "framer-motion";

const TextBlockTitle = ({ title }) => {
    

    return (
        <Title>
            {title}
        </Title>
    )
};

const Title = styled(motion.h1)`
    
`

export default TextBlockTitle;