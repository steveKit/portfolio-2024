import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./views/Home";
import About from "./views/About";
const AnimatedRoutes = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <AnimatePresence mode="wait" >
            <Routes location={location} key={location.key} >
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes> 
        </AnimatePresence> 
    )
};

export default AnimatedRoutes;