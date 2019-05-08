import React from "react";

export class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pomodoroSession: 0,
      minutes: 25,
      seconds: 36
    };
  }

  handleAddTime = () => {
    this.setState({
      seconds: this.state.seconds + 5
    });
  };

  render = () => {
    return (
      <div>
        <div>
          <button onClick={this.handleAddTime}>Add Time</button>
        </div>
        <div class="watch__div">
          <div />
          <div class="watch-timer__div">
            <div id="watch-tens-hour__div" class="watch-time__div">
              <p class="char">
                {this.state.minutes < 10
                  ? 0
                  : Math.floor(this.state.minutes / 10)}
              </p>
            </div>
            <div id="watch-ones-hour__div" class="watch-time__div">
              <p class="char">{this.state.minutes % 10}</p>
            </div>
            <div id="watch-tens-minute__div" class="watch-time__div">
              <p class="char">
                {this.state.seconds < 10
                  ? 0
                  : Math.floor(this.state.seconds / 10)}
              </p>
            </div>
            <div id="watch-ones-minute__div" class="watch-time__div">
              <p class="char">{this.state.seconds % 10}</p>
            </div>
          </div>
          <div />
        </div>
      </div>
    );
  };
}
