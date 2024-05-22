import React from "react";

export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
export type Suit = 'diams' | 'hearts' | 'clubs' | 'spades';

interface Props {
    rank: Rank;
    suit: Suit;
}

const Card: React.FC<Props> = ({ rank, suit }) => {
    return (
        <span className={`card rank-${rank} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suit === 'diams' ? '♦' : suit === 'hearts' ? '♥' : suit === 'clubs' ? '♣' : '♠'}</span>
        </span>
    );
};

export default Card;