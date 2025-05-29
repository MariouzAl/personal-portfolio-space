import { useState, useEffect } from "react";

export const useIncrementalCounter = (level: number): number => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < level) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            }
            );
        }, 10);
        return () => clearInterval(interval);
    }, [level]);

    return progress;
};
