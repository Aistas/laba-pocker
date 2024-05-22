import './App.css';
import Card from "./components/Cards/Card.tsx";
import CardDeck from './lib/CardDeck';
import { Rank, Suit } from './components/Cards/Card.tsx';
import React, { useState } from 'react';

const App: React.FC = () => {
    const [cards, setCards] = useState<{ rank: Rank, suit: Suit }[]>([]);

    const handleDealCards = () => {
        const deck = new CardDeck();
        const dealtCards = deck.getCards(5).map(card => ({
            rank: card.rank,
            suit: card.suit
        }));
        setCards(dealtCards);
    };

    return (
        <div>
            <button onClick={handleDealCards}>Раздать карты</button>
            {cards.length > 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <Card key={index} rank={card.rank} suit={card.suit} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
