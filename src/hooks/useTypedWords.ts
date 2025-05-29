import { useState, useEffect } from "react";

const useTypedWords = (
    words: string[],
    typeSpeed: number = 100,
    backSpeed: number = 50,
    backDelay: number = 2000
) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0); // Track the current word
    const [displayedText, setDisplayedText] = useState(""); // Text being typed/deleted
    const [isDeleting, setIsDeleting] = useState(false); // Whether we are deleting

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        let timeout;

        if (isDeleting) {
            // Deleting letters
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1)); // Remove one letter
                if (displayedText === "") {
                    setIsDeleting(false); // Switch to typing the next word
                    setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to the next word
                }
            }, backSpeed);
        } else {
            // Typing letters
            timeout = setTimeout(() => {
                setDisplayedText((prev) => currentWord.slice(0, prev.length + 1)); // Add one letter
                if (displayedText === currentWord) {
                    setTimeout(() => setIsDeleting(true), backDelay); // Start deleting after delay
                }
            }, typeSpeed);
        }

        return () => clearTimeout(timeout); // Cleanup timeout on unmount or re-render
    }, [displayedText, isDeleting, currentWordIndex, words, typeSpeed, backSpeed, backDelay]);

    return displayedText; // Return the currently displayed text
};

export default useTypedWords;