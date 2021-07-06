import { Component } from "react";
// import FeedbackButtons from "../FeedbackButtons/FeedbackButtons";
import "./Feedback.css";

class Feedback extends Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };

  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };

  handleIncrement = (label) => {
    this.setState((prevState) => ({
      [label]: prevState[label] + 1,
    }));
  };

  countTotalFeedback() {
    const feedbacksValues = Object.values(this.state);

    return feedbacksValues.reduce((total, value) => total + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    return Math.round((good * 100) / total);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { options } = this.props;

    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          {options.map((label) => (
            <button key={label} onClick={() => this.handleIncrement(label)}>
              {label}
            </button>
          ))}
        </div>

        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()} </p>
        <p>
          Positive feedback:
          {this.countPositiveFeedbackPercentage()
            ? this.countPositiveFeedbackPercentage()
            : 0}
          %
        </p>
      </>
    );
  }
}

export default Feedback;
