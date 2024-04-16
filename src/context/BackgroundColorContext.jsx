import { createContext, useContext, useState } from "react";

const BackgroundColorContext = createContext();

export const BackgroundColorProvider = ({ children }) => {
    const [backgroundColor, setBackgroundColor] = useState('bg-teal');
    const updateBackgroundColor = (color) => setBackgroundColor(color);

    return (
        <BackgroundColorContext.Provider value={{ backgroundColor, updateBackgroundColor}}>
            {children}
        </BackgroundColorContext.Provider>
    )
};

export const useBackgroundColorContext = () => useContext(BackgroundColorContext);