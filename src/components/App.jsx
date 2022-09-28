import { Component } from 'react';
import { Section } from './Sections/Section';
import { Buttons } from './Buttons/Buttons';
import { Notification } from './NotificationMessages/NothingMessage';
import { Statistics } from './Statistic/Statistic';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  }

  leaveVote = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const countPercentage = this.countPositiveFeedbackPercentage();

    const nameVote = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <Buttons options={nameVote} leaveVote={this.leaveVote} />
        </Section>

        {totalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={countPercentage}
            />
          </Section>
        )}
      </>
    );
  }
}
