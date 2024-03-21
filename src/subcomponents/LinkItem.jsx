import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const LinkItem = ({ title, href, isActive, setIsActive }) => {
    const underlinePathArray = [
        "M 0.64643242,26.89495 C 5.4181413,26.89325 10.234392,26.270504 14.94466,27.399228 c 5.578892,0.959041 11.249441,0.669535 16.835526,-0.03274 4.967111,-0.364184 9.958931,-0.458414 14.876359,-1.319397 3.786776,0.05397 7.586108,0.460279 11.386218,0.543447 4.76817,0.346242 9.574076,-0.378772 14.331644,0.324724 4.19931,-0.568825 8.379062,0.73914 12.579646,0.232411 1.065969,0.251782 2.206897,-0.262459 3.299516,-0.356283",
        "m 4.6138802,26.895774 c 4.3395179,-0.0017 4.614554,0.113311 13.0031858,0.517729 7.282802,0.42738 7.85633,0.353799 15.31067,-0.03361 4.517223,-0.373898 6.106153,0.07668 14.231907,-0.491449 5.188282,0.735607 6.196053,-0.390585 9.651973,-0.305199 4.336299,0.355478 8.706917,-0.388874 13.033576,0.333386 3.818962,-0.583998 7.62014,0.758856 11.440261,0.238611 0.96942,0.258497 2.00701,-0.26946 3.000667,-0.365787",
        "m 4.6138802,26.895774 c 4.3395179,-0.0017 7.9099658,-0.85714 16.2985978,-0.452722 6.980118,0.430021 8.810156,1.461023 18.976522,1.745367 4.517223,-0.373898 2.101719,-0.583795 10.227473,-1.151924 5.188282,0.735607 8.977525,-0.414858 12.433445,-0.329472 4.336299,0.355478 4.882394,-0.355498 9.209053,0.366762 3.818962,-0.583998 5.706361,0.601702 9.526482,0.08146 0.96942,0.258497 2.00701,-0.26946 3.000667,-0.365787",
        "m 3.9169953,26.728 c 4.3395179,-0.0017 8.4375597,-0.166324 17.5230777,0.405873 10.98,0.568969 15.91947,-1.322848 26.079767,-1.733873 10.380971,0.512643 7.948737,0.08438 14.504002,0 11.473549,1.658617 5.918211,1.607676 11.473549,1.658617 5.579984,1.071246 6.740982,0.75801 11.753445,0.272092",
        "m 4.6351195,29.329561 c 4.3395179,-0.0017 7.7270215,-1.898674 16.1156535,-1.494256 10.45544,0.225837 4.105803,0.285091 14.272169,0.569435 6.563804,-0.689166 13.508644,-0.157362 20.063909,-0.241746 5.383902,0.867901 9.736667,0.08888 16.336573,0.304561 6.955549,-0.67931 8.388447,0.715531 13.40091,0.229613",
        "m 2.5353622,27.783189 c 4.3395179,-0.0017 7.2252178,0.365822 16.1156538,-1.494256 12.550646,1.250683 13.327012,1.073894 23.493378,1.358238 6.563804,-0.689166 6.387192,0.600207 12.942457,0.515823 5.383902,0.867901 10.775167,-0.441748 16.675154,-0.741525 7.490729,0.880716 8.049866,1.761617 13.062329,1.275699",
        "m 4.4415553,27.071133 c 4.3395179,-0.0017 8.0974617,0.70592 16.9985177,0.06274 10.98,0.568969 11.408682,0.395215 21.568979,-0.01581 10.380971,0.512643 9.688673,0.39754 16.243938,0.313156 5.383902,0.867901 6.092053,0.816107 11.647391,0.867048 9.040135,-0.871357 9.337992,-0.48164 14.350455,-0.967558",
        "m 3.5859994,28.643296 c 4.3395179,-0.0017 8.9530176,-0.866243 17.8540736,-1.509423 10.98,0.568969 14.023897,1.241668 24.184194,0.830643 10.380971,0.512643 7.073458,-0.448913 13.628723,-0.533297 8.67628,-0.377818 8.689063,-0.423543 14.244401,-0.372602 5.579984,1.071246 6.740982,0.75801 11.753445,0.272092"
    ];
    const [isHovered, setIsHovered] = useState(false);
    //ref used to resize underline motion.div to the width of active menu item
    const linkRef = useRef(null);
    const [linkVariables, setLinkVariables] = useState({
        width: 0,
        path: underlinePathArray[0],
    });

    useEffect(() => {
        const updateWidthAndPath = () => {
            if (linkRef.current) {
                const newWidth = linkRef.current.offsetWidth;
                const newPathIndex = Math.floor(Math.random() * underlinePathArray.length);
                const newPath = underlinePathArray[newPathIndex];

                setLinkVariables({
                    width: newWidth,
                    path: newPath,
                });
            }
        };

        // Call initially and setup ResizeObserver
        updateWidthAndPath();
        const resizeObserver = new ResizeObserver(updateWidthAndPath);
        if (linkRef.current) {
            resizeObserver.observe(linkRef.current);
        }

        return () => {
            if (linkRef.current) {
                resizeObserver.unobserve(linkRef.current);
            }
        };
    }, [linkRef.current]);

    return (
        <StyledLi>
            <StyledLink 
                ref={linkRef}
                to={href}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}           
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsActive(title)}
            >
                {title}
            </StyledLink>
            {isActive === title && (
                <motion.div
                layoutId='underline'
                style={{
                    position: 'absolute',
                    top: '42px',
                    width: `${linkVariables.width}px`,
                    height: '0',
                    overflow: 'visible', // Ensure the SVG is not clipped
                }}
                transition={{ duration: 0.3 }}
            >
                <svg viewBox='0 21 90 10' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d={`${linkVariables.path}px`}
                        fill='none'
                        stroke='var(--midnight-blue)'
                        strokeWidth='3%'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeDasharray='none'
                        strokeOpacity='1'
                    />
                </svg>
                
            </motion.div>
            )}
        </StyledLi>            
    )
};

const StyledLi = styled.li`
    /* Adds a slash after each link except the last one */
    &:not(:last-child)::after {
        content: "/";
        position: absolute;
        translate: 9px;
        font-size: 1.7rem;
    }
`

const StyledLink = styled(Link)`
    font-size: 1.7rem;
`

export default LinkItem;