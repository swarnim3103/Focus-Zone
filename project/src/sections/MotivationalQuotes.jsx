import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const MotivationalQuotes = () => {
  const [motivationalQuotes, setMotivationalQuotes] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const sceneRef = useRef(null);
  const quoteRef = useRef(null);
  const pointCount = 200;
  let positions = [];
  let velocities = [];
  const maxDistance = 5;

  useEffect(() => {
    loadQuotes();
    initScene();
  }, []);

  const loadQuotes = async () => {
    const quotesUrl = 'https://gist.githubusercontent.com/JakubPetriska/060958fd744ca34f099e947cd080b540/raw/963b5a9355f04741239407320ac973a6096cd7b6/quotes.csv';
    const response = await fetch(quotesUrl);
    const text = await response.text();
    const lines = text.split('\n').slice(1); // Skip the first line
    const loadedQuotes = lines.map(line => {
      const [author, quote] = line.split('","').map(part => part.replace(/"/g, '').trim());
      return { author: author || "Anon", quote };
    }).filter(quote => quote.author && quote.quote);
    setMotivationalQuotes(loadedQuotes);
  };

  const initScene = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    createPoints(scene);

    const animate = () => {
      requestAnimationFrame(animate);
      updatePoints(scene);
      renderer.render(scene, camera);
    };

    animate();
  };

  const createPoints = (scene) => {
    for (let i = 0; i < pointCount; i++) {
      const x = (Math.random() * 2 - 1) * (window.innerWidth / 100);
      const y = (Math.random() * 2 - 1) * (window.innerHeight / 100);
      positions.push(x, y, 0);

      const angle = Math.random() * Math.PI * 2;
      const speed = (Math.random() - 0.5) * 0.02;
      velocities.push(Math.cos(angle) * speed);
      velocities.push(Math.sin(angle) * speed);

      const geometry = new THREE.CircleGeometry(0.02, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const circle = new THREE.Mesh(geometry, material);
      circle.position.set(x, y, 0);
      scene.add(circle);
    }
  };

  const updatePoints = (scene) => {
    const circles = scene.children.filter(child => child instanceof THREE.Mesh);
    circles.forEach((circle, i) => {
      circle.position.x += velocities[i * 2];
      circle.position.y += velocities[i * 2 + 1];

      if (Math.abs(circle.position.x) > window.innerWidth / 200 || Math.abs(circle.position.y) > window.innerHeight / 200) {
        circle.position.x = (Math.random() * 2 - 1) * (window.innerWidth / 100);
        circle.position.y = (Math.random() * 2 - 1) * (window.innerHeight / 100);
      }
    });
  };

  const generateQuote = () => {
    if (!motivationalQuotes.length || isTyping || isDeleting) return;
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    const { author, quote } = motivationalQuotes[randomIndex];
    deleteQuote(() => {
      typeQuote(quote, author);
    });
  };

  const deleteQuote = (callback) => {
    const quoteElement = quoteRef.current;
    const words = quoteElement.innerHTML.split(' ');
    let index = words.length;

    setIsDeleting(true);
    const deleteNextWord = () => {
      if (index > 0) {
        index--;
        quoteElement.innerHTML = words.slice(0, index).join(' ') + ' |';
        setTimeout(deleteNextWord, 175);
      } else {
        quoteElement.innerHTML = '';
        setIsDeleting(false);
        callback();
      }
    };
    deleteNextWord();
  };

  const typeQuote = (quote, author) => {
    setIsTyping(true);
    const quoteElement = quoteRef.current;
    const fullText = `<strong>${quote}</strong><br><em>~ ${author}</em>`;
    let index = 0;

    const typeNextCharacter = () => {
      if (index < fullText.length) {
        quoteElement.innerHTML = fullText.substring(0, index + 1);
        index++;
        setTimeout(typeNextCharacter, Math.random() * 50 + 50);
      } else {
        setIsTyping(false);
      }
    };
    typeNextCharacter();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mt-10">Motivational Quotes</h1>
      <div id="scene" ref={sceneRef} className="w-full h-10"></div>
      <div id="quote" ref={quoteRef} className="text-center text-lg"></div>
      <button
        id="generate"
        onClick={generateQuote}
        className="bg-black text-white px-4 py-2 rounded mt-6 mb-6 transition"
      >
        Generate Quote
      </button>
    </div>
  );
};

export default MotivationalQuotes;

