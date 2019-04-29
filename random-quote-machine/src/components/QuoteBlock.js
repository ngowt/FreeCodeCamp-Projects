import React from "react";

export const QuoteBlock = props => {
  return (
    <div id="quote-box" className="container">
      <div id="text" className="row">
        <div className="col">
          <h1>
            <img
              className="quote__img"
              src="./images/left-quotes-sign.png"
              alt="left-quotes-sign"
            />
            {props.quote}
          </h1>
        </div>
      </div>
      <div id="author" className="row">
        <div className="col">
          <p>- {props.author}</p>
        </div>
      </div>
      <div className="row">
        <button
          id="quote__btn"
          className="btn btn-dark"
          onClick={props.quoteClickEvent}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};
