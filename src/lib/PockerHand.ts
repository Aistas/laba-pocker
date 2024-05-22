import { Rank, Suit } from '../components/Cards/Card.tsx';

class PockerHand {
    private cards: { rank: Rank; suit: Suit }[];

    constructor(cards: { rank: Rank; suit: Suit }[]) {
        this.cards = cards;
    }

    getOutcome(): string {
        const ranks = this.cards.map(card => card.rank);
        const suits = this.cards.map(card => card.suit);

        if (this.hasOnePair(ranks)) {
            return 'Одна пара';
        } else if (this.hasTwoPairs(ranks)) {
            return 'Две пары';
        } else if (this.hasThree(ranks)) {
            return 'Тройка';
        } else if (this.hasFlush(suits)) {
            return 'Флэш';
        } else {
            return 'Старшая карта';
        }
    }

    private hasOnePair(ranks: Rank[]): boolean {
        const rankCounts: { [key: string]: number } = {};
        ranks.forEach(rank => {
            rankCounts[rank] = (rankCounts[rank] || 0) + 1;
        });
        return Object.values(rankCounts).includes(2);
    }

    private hasTwoPairs(ranks: Rank[]): boolean {
        const rankCounts: { [key: string]: number } = {};
        ranks.forEach(rank => {
            rankCounts[rank] = (rankCounts[rank] || 0) + 1;
        });
        const pairs = Object.values(rankCounts).filter(count => count === 2);
        return pairs.length === 2;
    }

    private hasThree(ranks: Rank[]): boolean {
        const rankCounts: { [key: string]: number } = {};
        ranks.forEach(rank => {
            rankCounts[rank] = (rankCounts[rank] || 0) + 1;
        });
        return Object.values(rankCounts).includes(3);
    }

    private hasFlush(suits: Suit[]): boolean {
        return new Set(suits).size === 1;
    }
}

export default PockerHand;