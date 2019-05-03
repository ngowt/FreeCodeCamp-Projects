import React from "react";

export class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: props.val
    };
  }

  render = () => {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => this.props.onPress(this.state.val)}
        >
          {this.state.val}
        </button>
      </div>
    );
  };
}
