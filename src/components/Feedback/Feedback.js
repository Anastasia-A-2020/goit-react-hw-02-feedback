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

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          {this.props.options.map((label, index) => (
            <button key={index} onClick={() => this.handleIncrement(label)}>
              {label}
            </button>
          ))}
        </div>

        <h1>Statistics</h1>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total:</p>
        <p>Positive feedback:</p>
      </>
    );
  }
}

export default Feedback;
