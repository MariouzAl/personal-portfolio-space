/**
 * TODO:
 *
 * - Fix the counter so it increments one number per second correctly
 * - Add a button tu pause/stop the counter
 *
 * Bonus track:
 *
 * - Adds buttons for pause and resume the counter
 *
 */

import { useState, useEffect } from "react";


export const useTimer = (initialValue: number = 0) => {
    const [count, setCount] = useState(initialValue);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let timer: number

        if (isRunning) {
            timer = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isRunning]);

    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setCount(initialValue);
    };

    return { count, isRunning, start, stop, reset };
};

const useTimerWithTimeout = (initialValue: number = 0) => {
    console.log('useTimerWithTimeout')
    const [count, setCount] = useState(initialValue);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let timer: number

        if (isRunning) {
            timer = setTimeout(() => {
                setCount((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [isRunning, count]);

    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setCount(initialValue);
    };

    return { count, isRunning, start, stop, reset };
};


function AutoIncrementCounter() {

    const { count, isRunning, start, stop, reset } = useTimerWithTimeout(0);

    const startStopHandler = () => {
        isRunning ? stop() : start();
    }

    return (
        <div className="bg-amber-50">
            <h1>Auto Counter: {count}</h1>
            <button className="bg-amber-300 rounded-3xl p-1.5 m-0.5" onClick={startStopHandler}>{isRunning ? "Pause" : "Start"}</button>
            <button className="bg-amber-300 rounded-3xl p-1.5 m-0.5" onClick={reset}>Reset</button>
        </div>
    );
}

export default AutoIncrementCounter;
