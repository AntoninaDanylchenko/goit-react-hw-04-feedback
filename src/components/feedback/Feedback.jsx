import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    const btn = event.target.textContent;
    switch (btn) {
      case 'Good':
        return this.setState(prevDef => ({
          good: prevDef.good + 1,
        }));
      case 'Neutral':
        return this.setState(prevDef => ({
          neutral: prevDef.neutral + 1,
        }));
      case 'Bad':
        return this.setState(prevDef => ({
          bad: prevDef.bad + 1,
        }));
      default:
        return console.log('no btn');
    }
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
      <div className={css.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.leaveFeedback} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <p>There is no feedback.</p>
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
