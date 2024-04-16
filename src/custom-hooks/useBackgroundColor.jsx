import colorArray from '../data/colorArray';
import { useBackgroundColorContext } from '../context/BackgroundColorContext';

const useBackgroundColor = () => {
    const { backgroundColor, updateBackgroundColor } = useBackgroundColorContext();

    const newBackgroundColor = (requestedColor) => {
        let newColor;
        if (!requestedColor) {
            do {
                newColor = colorArray[Math.floor(Math.random() * colorArray.length)];
            } while (newColor === backgroundColor);
        } else {
            newColor = requestedColor;
        }
        updateBackgroundColor(newColor);
    };

    return newBackgroundColor;
};

export default useBackgroundColor;