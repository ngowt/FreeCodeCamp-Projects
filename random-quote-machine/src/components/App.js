import React from "react";
import { QuoteBlock } from "./QuoteBlock";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:
        "Justice is subject to dispute; might is easily recognized and is not disputed. So we cannot give might to justice, because might has gainsaid justice, and has declared that it is she herself who is just. And thus being unable to make what is just strong, we have made what is strong just.",
      author: "Blaise Pascal"
    };
  }

  quoteClickHandler = () => {
    this.setState({
      quote:
        "He who fights with monsters should look to it that he himself does not become a monster. And if you gaze long into an abyss, the abyss also gazes into you.",
      author: "Friedrich Nietzsche"
    });
  };

  render = () => {
    return (
      <div>
        <QuoteBlock
          quote={this.state.quote}
          author={this.state.author}
          quoteClickEvent={this.quoteClickHandler}
        />
      </div>
    );
  };
}
