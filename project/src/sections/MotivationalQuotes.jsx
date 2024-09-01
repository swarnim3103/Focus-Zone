// src/MotivationalQuote.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MotivationalQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/motivational-quote'); // Ensure this matches your backend URL
        setQuote(response.data.quote);
      } catch (error) {
        console.error('Error fetching quote:', error);
        setQuote('Failed to load quote.');
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="p-4 mt-2 mr-20 ml-20 ">
      <h1 className="text-xl font-bold mb-2">Remember</h1>
      <p className="text-lg italic">{quote}</p>
    </div>
  );
};

export default MotivationalQuote;
