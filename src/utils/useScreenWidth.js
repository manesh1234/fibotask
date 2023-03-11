import { useState, useEffect } from "react";

const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleSize = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleSize);
        return () => {
            window.removeEventListener('resize', handleSize);
        }
    }, [])
    return screenWidth;
}

export default useScreenWidth;