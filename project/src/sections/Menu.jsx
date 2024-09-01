import React from "react";
import Card from "../sections/Card"; 
import { Link } from "react-router-dom";

const Menu = () => {
  const cardsData = [
    { image: "https://i.pinimg.com/1200x/a4/e4/9d/a4e49ddbef5ebfc4dcef41cfb399536d.jpg", title: "Personal Focus", subtitle: "Help personalize your focus and productivity routines based on your behavior and preferences." },
    { image: "https://i.pinimg.com/1200x/04/bf/cc/04bfcc656863a469ac6ad726c3e8be0f.jpg", title: "Focus-enhancing", subtitle: "AI curated content that is conducive to maintaining concentration." },
    { image: "https://i.pinimg.com/1200x/b3/35/06/b3350682ea7ac09c127cb749a36a93f9.jpg", title: "Cognitive Training Games", subtitle: "Enhance cognitive training games that are designed to improve attention span and focus." , link: "/game"},
    { image: "https://i.pinimg.com/1200x/d6/86/c6/d686c6e7c1a11c7a1223a24382d2961f.jpg", title: "Notebook", subtitle: "Record your progress in the journey of increasing your focus." , link: "/notebook"},
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <Link to={card.link}>
           <Card key={index} image={card.image} title={card.title} subtitle={card.subtitle} />
          </Link>
         
        ))}
      </div>
    </div>
  );
};

export default Menu;
