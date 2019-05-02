import React from "react";

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0"
    };
  }

  renderOperationRows = () => {
    const operations = [
      { del: "DEL" },
      { ac: "AC" },
      { add: "+" },
      { subtract: "-" },
      { multiply: "*" },
      { divide: "/" }
    ];

    const r1 = operations.slice(0, 2);
    const r2 = operations.slice(2, 4);
    const r3 = operations.slice(4, 6);
    return (
      <div>
        <div className="row">
          {r1.map(op => (
            <button>{Object.values(op)}</button>
          ))}
        </div>
        <div className="row">
          {r2.map(op => (
            <button>{Object.values(op)}</button>
          ))}
        </div>
        <div className="row">
          {r3.map(op => (
            <button>{Object.values(op)}</button>
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
            <button>{num}</button>
          ))}
        </div>
        <div className="row justify-content-start">
          {r2.map(num => (
            <button>{num}</button>
          ))}
        </div>
        <div className="row justify-content-start">
          {r3.map(num => (
            <button>{num}</button>
          ))}
        </div>
        <div className="row justify-content-start">
          {r4.map(num => (
            <button>{num}</button>
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
            <input value={this.state.display} />
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
