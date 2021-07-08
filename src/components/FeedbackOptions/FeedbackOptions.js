import React from "react";

const FeedbackOptions = ({ buttons, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(buttons).map((button) => (
        <button key={button} onClick={onLeaveFeedback}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
