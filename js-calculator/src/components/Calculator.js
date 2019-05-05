import React from "react";
import { CalculatorButton } from "./CalculatorButton";

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0"
    };
  }

  componentDidMount = () => {
    this.bindKeyListeners();
  };

  bindKeyListeners = () => {
    document.addEventListener("keydown", this.keyDownHandler);
  };

  clearHandler = () => {
    this.setState({ display: "0" });
  };

  deleteHandler = () => {
    this.state.display.length === 1
      ? this.setState({ display: "0" })
      : this.setState({
          display: this.state.display
            .slice(0, this.state.display.length - 1)
            .toString()
        });
  };

  equalsHandler = () => {
    try {
      this.setState({ display: eval(this.state.display).toString() });
    } catch (err) {
      this.setState({ display: "ERROR" });
    }
  };

  keyDownHandler = ({ key }) => {
    switch (key) {
      case "1":
        this.updateDisplayHandler(key);
        break;
      case "2":
        this.updateDisplayHandler(key);
        break;
      case "3":
        this.updateDisplayHandler(key);
        break;
      case "4":
        this.updateDisplayHandler(key);
        break;
      case "5":
        this.updateDisplayHandler(key);
        break;
      case "6":
        this.updateDisplayHandler(key);
        break;
      case "7":
        this.updateDisplayHandler(key);
        break;
      case "8":
        this.updateDisplayHandler(key);
        break;
      case "9":
        this.updateDisplayHandler(key);
        break;
      case "0":
        this.updateDisplayHandler(key);
        break;
      case "-":
        this.updateDisplayHandler(key);
        break;
      case "+":
        this.updateDisplayHandler(key);
        break;
      case "*":
        this.updateDisplayHandler(key);
        break;
      case "/":
        this.updateDisplayHandler(key);
        break;
      case "Delete":
        this.deleteHandler();
        break;
      case "Backspace":
        this.deleteHandler();
        break;
      case "Enter":
        this.equalsHandler();
        break;
      case "=":
        this.equalsHandler();
        break;
    }
  };

  updateDisplayHandler = val => {
    if (this.state.display === "0") {
      this.setState({
        display: val.toString()
      });
    } else {
      this.setState({
        display: this.state.display.concat(val.toString())
      });
    }
  };

  renderOperationRows = () => {
    const operations = [
      { del: "DEL" },
      { ac: "AC" },
      { add: "+" },
      { subtract: "-" },
      { multiply: "*" },
      { divide: "/" },
      { equal: "=" }
    ];
    const r2 = operations.slice(2, 4);
    const r3 = operations.slice(4, 6);
    return (
      <div>
        <div className="row">
          <CalculatorButton
            key={`calculator__btn-${Object.keys(operations[0])}`}
            btnStyle="btn-secondary"
            val={operations[0].del}
            onPress={this.deleteHandler}
          />
          <CalculatorButton
            key={`calculator__btn-${Object.keys(operations[1])}`}
            btnStyle="btn-secondary"
            val={operations[1].ac}
            onPress={this.clearHandler}
          />
        </div>
        <div className="row">
          {r2.map(op => (
            <CalculatorButton
              key={`calculator__btn-${Object.keys(op)}`}
              btnStyle="btn-warning"
              val={Object.values(op)[0]}
              onPress={this.updateDisplayHandler}
            />
          ))}
        </div>
        <div className="row">
          {r3.map(op => (
            <CalculatorButton
              key={`calculator__btn-${Object.keys(op)}`}
              btnStyle="btn-warning"
              val={Object.values(op)[0]}
              onPress={this.updateDisplayHandler}
            />
          ))}
        </div>
        <div className="row">
          <CalculatorButton
            key={`calculator__btn-${Object.keys(operations[6])}`}
            btnStyle="btn-success"
            val={operations[6].equal}
            onPress={this.equalsHandler}
          />
        </div>
      </div>
    );
  };

  renderNumeralRows = () => {
    const numerals = Array.from({ length: 10 }, (v, i) => i);
    const r1 = [...numerals.slice(0, 1), "."];
    const r2 = numerals.slice(1, 4);
    const r3 = numerals.slice(4, 7);
    const r4 = numerals.slice(7, 10);
    return (
      <div className="d-flex flex-column-reverse">
        <div className="row">
          {r1.map(num => (
            <CalculatorButton
              key={`calculator__btn-${num}`}
              btnStyle="btn-primary"
              val={num.toString()}
              onPress={this.updateDisplayHandler}
            />
          ))}
        </div>
        <div className="row ">
          {r2.map(num => (
            <CalculatorButton
              key={`calculator__btn-${num}`}
              btnStyle="btn-primary"
              val={num.toString()}
              onPress={this.updateDisplayHandler}
            />
          ))}
        </div>
        <div className="row ">
          {r3.map(num => (
            <CalculatorButton
              key={`calculator__btn-${num}`}
              btnStyle="btn-primary"
              val={num.toString()}
              onPress={this.updateDisplayHandler}
            />
          ))}
        </div>
        <div className="row ">
          {r4.map(num => (
            <CalculatorButton
              key={`calculator__btn-${num}`}
              btnStyle="btn-primary"
              val={num.toString()}
              onPress={this.updateDisplayHandler}
            />
          ))}
        </div>
      </div>
    );
  };

  render = () => {
    return (
      <div className="container background">
        <div className="row">
          <div className="col-5 calculator__display-div">
            <input
              type="text"
              className="form-control calculator__display-input"
              value={this.state.display}
              readOnly
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3 calculator__div-col-num">
            {this.renderNumeralRows()}
          </div>
          <div className="col-2 calculator__div-col-op">
            {this.renderOperationRows()}
          </div>
        </div>
      </div>
    );
  };
}
