import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <button
      type="button"
      name={options[0]}
      onClick={onLeaveFeedback}
      className={css.feedbackBtn}
    >
      Good
    </button>
    <button
      type="button"
      name={options[1]}
      onClick={onLeaveFeedback}
      className={css.feedbackBtn}
    >
      Neutral
    </button>
    <button
      type="button"
      name={options[2]}
      onClick={onLeaveFeedback}
      className={css.feedbackBtn}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
