import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, typingSpeed = 150, erasingSpeed = 100, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (isTyping) {
      if (index < text.length) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setIsTyping(false), delay); // Start erasing after delay
      }
    } else {
      if (index > 1) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        }, erasingSpeed);
      } else {
        // Reset for the next typing phase, but keep the last character
        setIsTyping(true);
        setIndex(1);
      }
    }

    return () => clearTimeout(timer);
  }, [text, index, isTyping, typingSpeed, erasingSpeed, delay]);

  return (
    <div className="text-8xl text-customBlue3 pt-20 pb-12 -ml-4 font-bold">
      {displayedText}
    </div>
  );
};

export default Typewriter;