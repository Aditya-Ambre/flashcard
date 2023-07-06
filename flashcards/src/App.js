import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card/Card";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        { id: 1, eng: "English", han: "Hanzi", pin: "Pinyin" },
        { id: 2, eng: "English", han: "Panzi", pin: "PinPin" },
        { id: 3, eng: "English", han: "Dzi", pin: "yin" },
        { id: 4, eng: "English", han: "nzi", pin: "in" },
      ],
      currentCard: {},
    };
  }

  componentWillMount() {
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards),
    });
  }

  getRandomCard(currentCards) {
    var card = currentCards[Math.random() * currentCards.length];
    return card;
  }

  render() {
    return (
      <div className="App">
        <Card
          eng={this.state.currentCard.eng}
          han={this.state.currentCard.han}
          pin={this.state.currentCard.pin}
        />
      </div>
    );
  }
}

export default App;
