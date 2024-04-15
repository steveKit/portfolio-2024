import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./views/Home";
import About from "./views/About";
// import AnimatedBg from "./components/AnimatedBg";
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait"  >
            {/* <AnimatedBg /> */}
                <Routes location={location} key={location.pathname} >
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>   
        </AnimatePresence> 
    )
};

export default AnimatedRoutes;