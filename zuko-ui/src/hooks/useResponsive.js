import { useEffect, useState } from "react";

const useResponsive = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(min-width: 1024px)').matches) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    }, [])

    return {
        isDesktop,
        isMobile: !isDesktop
    };
}

export default useResponsive;