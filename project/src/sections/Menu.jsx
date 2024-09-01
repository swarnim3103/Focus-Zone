import React from "react";
import Card from "../sections/Card"; 

const Menu = () => {
  const cardsData = [
    { image: "url-to-image1", title: "Work with Mellanie", subtitle: "LifeAt" },
    { image: "url-to-image2", title: "Moroccan lofi girl - Nasheed / Rain", subtitle: "noondrawings" },
    { image: "url-to-image3", title: "cozy desk work with me", subtitle: "LifeAt" },
    { image: "url-to-image4", title: "snowy read with me", subtitle: "heartandintellect" },
    { image: "url-to-image5", title: "1Hr cafe.studyy", subtitle: "cafe.studyy" },
    { image: "url-to-image6", title: "Study with Phuong", subtitle: "Phuonghocdi" },
    { image: "url-to-image7", title: "Study with 16sdiary", subtitle: "16sdiary" },
    { image: "url-to-image8", title: "Pack orders with me", subtitle: "foryoubylharmo" }
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} subtitle={card.subtitle} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
