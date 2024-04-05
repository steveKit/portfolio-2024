import styled from "styled-components";
import { motion } from "framer-motion";

const TextBlockBody = ({ body }) => {
    
    return (
        <Body>
            {body}
        </Body>
    )
};

const Body = styled(motion.p)`
    
`

export default TextBlockBody;