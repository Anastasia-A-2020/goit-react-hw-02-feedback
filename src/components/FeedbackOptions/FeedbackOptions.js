import React from "react";
import PropTypes from "prop-types";
import Section from "../Section";
import "./FeedbackOptions.module.css";

const FeedbackOptions = ({ buttons, onLeaveFeedback }) => {
  return (
    <div>
      <Section title="Please leave feedback">
        {Object.keys(buttons).map((button) => (
          <button key={button} name={button} onClick={onLeaveFeedback}>
            {button}
          </button>
        ))}
      </Section>
    </div>
  );
};

FeedbackOptions.propTypes = {
  buttons: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
