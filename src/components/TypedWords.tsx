import useTypedWords from "../hooks/useTypedWords";

const TypedWords = ({
    words,
    typeSpeed = 100,
    backSpeed = 50,
    backDelay = 2000,
}: {
    words: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
}) => {
    const displayedText = useTypedWords(words, typeSpeed, backSpeed, backDelay);
    return (
        <>
            <span className="border-b-cyan-500 border-solid border-b-2">{displayedText}</span>
            <span className="typed-cursor" aria-hidden="true">|</span>
        </>
    );
};

export default TypedWords;