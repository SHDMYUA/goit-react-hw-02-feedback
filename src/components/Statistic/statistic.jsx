import { Component } from 'react';
import css from './statistic.module.css';
// import PropTypes from 'prop-types';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveVote = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <div>
          <button className={css.button} onClick={() => this.leaveVote('good')}>
            Good
          </button>
          <button
            className={css.button}
            onClick={() => this.leaveVote('neutral')}
          >
            Neutral
          </button>
          <button className={css.button} onClick={() => this.leaveVote('bad')}>
            Bad
          </button>
        </div>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
      </div>
    );
  }
}

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
// };
