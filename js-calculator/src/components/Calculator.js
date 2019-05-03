import React from "react";
import { CalculatorButton } from "./CalculatorButton";

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0"
    };
  }

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

  updateDisplayHandler = val => {
    if (this.state.display === "0") {
      this.setState({
        display: val
      });
    } else {
      this.setState({
        display: this.state.display.concat(val)
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
      { divide: "/" }
    ];
    const r2 = operations.slice(2, 4);
    const r3 = operations.slice(4, 6);
    return (
      <div>
        <div className="row">
          <CalculatorButton
            key={`calculator__btn-${Object.keys(operations[0])}`}
            val={operations[0].del}
            onPress={this.deleteHandler}
          />
          <CalculatorButton
            key={`calculator__btn-${Object.keys(operations[1])}`}
            val={operations[1].ac}
            onPress={this.clearHandler}
          />
        </div>
        <div className="row">
          {r2.map(op => (
            <CalculatorButton
              key={`calculator__btn-${Object.keys(op)}`}
              val={Object.values(op)[0]}
              onPress={this.updateDisplayHandler}
            />
          ))}
        </div>
        <div className="row">
          {r3.map(op => (
            <CalculatorButton
              key={`calculator__btn-${Object.keys(op)}`}
              val={Object.values(op)[0]}
              onPress={this.updateDisplayHandler}
            />
          ))}
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
              val={num.toString()}
              onPress={this.updateDisplayHandler}
            />
          ))}
        </div>
        <div className="row justify-content-start">
          {r2.map(num => (
            <CalculatorButton
              key={`calculator__btn-${num}`}
              val={num.toString()}
              onPress={this.updateDisplayHandler}
            />
          ))}
        </div>
        <div className="row justify-content-start">
          {r3.map(num => (
            <CalculatorButton
              key={`calculator__btn-${num}`}
              val={num.toString()}
              onPress={this.updateDisplayHandler}
            />
          ))}
        </div>
        <div className="row justify-content-start">
          {r4.map(num => (
            <CalculatorButton
              key={`calculator__btn-${num}`}
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <input value={this.state.display} readOnly />
          </div>
        </div>
        <div className="row">
          <div className="col-6">{this.renderNumeralRows()}</div>
          <div className="col-4">{this.renderOperationRows()}</div>
        </div>
        {/* <button key="equals">=</button> */}
      </div>
    );
  };
}
