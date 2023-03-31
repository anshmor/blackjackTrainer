import {useState } from 'react'
import { Image, Card, Container } from 'react-bootstrap';
import './App.css';

function Hand(props) {
    const [cards, setCards] = useState([props.deck.pop(), props.deck.pop(), props.deck.pop(), props.deck.pop()]);

    return (
        <div className="card-stack" style={{ '--num-cards': cards.length }}>
            {cards.map((card, index) => {
                return (
                    <Card className="my-card" style={{ '--card-index': index + 1 }}>
                        <Card.Body>
                            <Card.Text>{card["Value"]}</Card.Text>
                            <Image className="suit" src={card["Suit"] + ".png"}></Image>
                        </Card.Body>
                    </Card>
                )
            })}
          </div>
    )
}

export default Hand;
