import './App.css';
import Card from "./components/Cards/Card.tsx";
import CardDeck from './lib/CardDeck.ts';
import PockerHand from './lib/PockerHand.ts';
import { Rank, Suit } from './components/Cards/Card.tsx';
import React, { useState, useEffect } from 'react';

interface CardState {
    rank: Rank;
    suit: Suit;
}

const App: React.FC = () => {
    const [cards, setCards] = useState<CardState[]>([]);
    const [deck, setDeck] = useState<CardDeck | null>(null);
    const [remainingCards, setRemainingCards] = useState<number>(52);
    const [handOutcome, setHandOutcome] = useState<string>('');

    useEffect(() => {
        if (cards.length === 5) {
            const pockerHand = new PockerHand(cards);
            const outcome = pockerHand.getOutcome();
            setHandOutcome(outcome);
        }
    }, [cards]);

    const handleDealCards = () => {
        if (!deck) {
            const newDeck = new CardDeck();
            const dealtCards: CardState[] = newDeck.getCards(5).map(card => ({
                rank: card.rank,
                suit: card.suit
            }));
            setCards(dealtCards);
            setDeck(newDeck);
            setRemainingCards(newDeck.getRemainingCount());
        } else if (remainingCards >= 5) {
            const dealtCards: CardState[] = deck.getCards(5).map(card => ({
                rank: card.rank,
                suit: card.suit
            }));
            setCards(dealtCards);
            setRemainingCards(deck.getRemainingCount());
        }
    };

    const handleResetGame = () => {
        setDeck(null);
        setCards([]);
        setRemainingCards(52);
        setHandOutcome('');
    };

    return (
        <div>
            {remainingCards >= 5 ? (
                <button onClick={handleDealCards}>Раздать карты</button>
            ) : (
                <button onClick={handleResetGame}>Начать игру заново</button>
            )}
            <div>Осталось карт: {remainingCards}</div>
            {handOutcome && <div>Текущая рука: {handOutcome}</div>}
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
