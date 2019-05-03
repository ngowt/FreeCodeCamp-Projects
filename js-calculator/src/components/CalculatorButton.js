import React from "react";

export class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: props.val,
      btnStyle: props.btnStyle
    };
  }

  render = () => {
    return (
      <div className="calculator__div-num">
        <button
          className={`btn calculator__btn-num ${this.state.btnStyle}`}
          onClick={() => this.props.onPress(this.state.val)}
        >
          {this.state.val}
        </button>
      </div>
    );
  };
}
