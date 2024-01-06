import React, { useState, useEffect } from 'react';
import './TextAnimation.css';

const TextAnimation = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);
    const texts = ["Hello, I am Zayeem Zaki", "I'm a Full Stack Developer", "I'm a Software Engineer"];

    // Typing Effect
    useEffect(() => {
        if (subIndex === texts[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === texts[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    // Blinking Cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);

        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <h1 className="typing-effect">
            {`${texts[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h1>
    );
};

export default TextAnimation;
