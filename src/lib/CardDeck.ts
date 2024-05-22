import Card from "./Card";
import { Rank, Suit } from "../components/Cards/Card.tsx"; // Assuming your Card component is in a components folder

class CardDeck {
    private cards: Card[];

    constructor() {
        const suits: Suit[] = ['diams', 'hearts', 'clubs', 'spades'];
        const ranks: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this.cards = [];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex, 1)[0];
    }

    getCards(howMany: number): Card[] {
        const drawnCards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            drawnCards.push(this.getCard());
        }
        return drawnCards;
    }
}

export default CardDeck;