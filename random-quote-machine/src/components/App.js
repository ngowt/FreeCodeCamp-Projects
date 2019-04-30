import React from "react";
import { QuoteBlock } from "./QuoteBlock";
import { Quotes } from "../services/Quotes";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:
        "Justice is subject to dispute; might is easily recognized and is not disputed. So we cannot give might to justice, because might has gainsaid justice, and has declared that it is she herself who is just. And thus being unable to make what is just strong, we have made what is strong just.",
      author: "Blaise Pascal",
      quotes: []
    };
  }

  componentDidMount = async () => {
    this.setState({
      quotes: await Quotes
    });
  };

  newQuoteHandler = () => {
    const rand = Math.floor(Math.random() * this.state.quotes.length);
    const { quote, author } = this.state.quotes[rand];
    this.setState({
      quote,
      author
    });
  };

  render = () => {
    return (
      <div>
        <QuoteBlock
          quote={this.state.quote}
          author={this.state.author}
          newQuoteEvent={this.newQuoteHandler}
        />
      </div>
    );
  };
}
