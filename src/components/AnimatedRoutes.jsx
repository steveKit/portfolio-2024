import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import About from "./About";
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait" initial={false} >                
            <Routes location={location} key={location.pathname} >
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>     
        </AnimatePresence> 
    )
};

export default AnimatedRoutes;