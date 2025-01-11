import { useState } from "react";
import SwipeableCard from "./SwipeableCard";
import { AnimatePresence } from "framer-motion";

interface Card {
  title: string;
  description: string;
  imageUrl: string;
}

function CardDeck() {
  const cards: Card[] = [
    {
      title: "Inception",
      description: "A mind-bending thriller that will keep you guessing.",
      imageUrl: "https://i.ytimg.com/vi/hMQ7VhcCpuY/maxresdefault.jpg"
    },
    {
      title: "Stranger Things",
      description: "Dive into the nostalgic supernatural world.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdb0VGE6o-UdwBZoOZ4BwllSxg_El1JCrjng&s"
    },
    {
      title: "Breaking Bad",
      description: "A thrilling journey of transformation.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_QL75_UX500_CR0,0,500,281_.jpg"
    }
  ];

  const [currentCards, setCurrentCards] = useState<Card[]>(cards);

  const handleSwipe = (direction: "left" | "right") => {
    console.log(`Swiped ${direction}`);
    setCurrentCards((prev) => prev.slice(1));
  };

  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "450px",
        margin: "auto"
      }}
    >
      <AnimatePresence>
        {currentCards.map((card, index) => (
          <SwipeableCard
            key={card.title}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            onSwipe={handleSwipe}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: currentCards.length - index
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default CardDeck;
