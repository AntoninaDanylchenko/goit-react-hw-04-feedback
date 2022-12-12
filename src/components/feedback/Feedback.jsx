import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterGoodFeedback = () => {
    this.setState(prevDef => ({
      good: prevDef.good + 1,
    }));
  };
  counterNeutralFeedback = () => {
    this.setState(prevDef => ({
      neutral: prevDef.neutral + 1,
    }));
  };
  counterBadFeedback = () => {
    this.setState(prevDef => ({
      bad: prevDef.bad + 1,
    }));
  };
  render() {
    return (
      <div className="Feedback">
        <div className="Feedback_btn_container">
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.counterGoodFeedback}>
            God
          </button>
          <button type="button" onClick={this.counterNeutralFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.counterBadFeedback}>
            Bad
          </button>
        </div>
        <div className="Feedback_span_container">
          <ul>
            <li>
              Goog:<span>{this.state.good}</span>
            </li>
            <li>
              Neutral:<span>{this.state.neutral}</span>
            </li>
            <li>
              Bad:<span>{this.state.bad}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
