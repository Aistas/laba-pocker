import {Rank, Suit} from "../components/Cards/Card.tsx";

export default class Card {
    public rank: Rank;
    public suit: Suit;

    constructor(rank: Rank, suit: Suit) {
        this.rank = rank;
        this.suit = suit;
    }
}