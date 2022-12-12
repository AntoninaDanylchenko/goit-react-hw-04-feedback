import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGoodFeedback = () => {
    this.setState(prevDef => ({
      good: prevDef.good + 1,
    }));
  };
  countNeutralFeedback = () => {
    this.setState(prevDef => ({
      neutral: prevDef.neutral + 1,
    }));
  };
  countBadFeedback = () => {
    this.setState(prevDef => ({
      bad: prevDef.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  render() {
    return (
      <div className="Feedback">
        <div className="Feedback_btn_container">
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.countGoodFeedback}>
            God
          </button>
          <button type="button" onClick={this.countNeutralFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.countBadFeedback}>
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
            <li>
              Total:<span>{this.countTotalFeedback()}</span>
            </li>
            <li>
              Positive feedback:
              <span>{this.countPositiveFeedbackPercentage()}%</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
