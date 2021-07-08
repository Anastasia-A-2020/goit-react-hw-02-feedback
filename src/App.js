import { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import "./App.css";

class App extends Component {
  state = {
    good: 1,
    neutral: 0,
    bad: 0,
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

    return (
      <>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          buttons={this.state}
          onLeaveFeedback={this.handleIncrement}
        />

        {/* <div>
          {Object.keys(this.state).map(label => (
            <button key={label} onClick={() => this.handleIncrement(label)}>
              {label}
            </button>
          ))}
        </div> */}

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={
            this.countPositiveFeedbackPercentage()
              ? this.countPositiveFeedbackPercentage()
              : 0
          }
        ></Statistics>
      </>
    );
  }
}

export default App;
