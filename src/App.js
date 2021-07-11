import { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
// import Section from "./components/Section";
import Notification from "./components/Notification";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (e) => {
    const name = e.currentTarget.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const feedbacksValues = Object.values(this.state);

    return feedbacksValues.reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    if (total === 0) {
      return 0;
    }

    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return (
      <>
        <FeedbackOptions
          buttons={this.state}
          onLeaveFeedback={this.handleIncrement}
        />

        {totalFeedback > 0 ? (
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
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default App;
