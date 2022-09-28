import shortid from 'shortid';
import css from './Buttons.module.css';
import PropTypes from 'prop-types';

export const Buttons = ({ options, leaveVote }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={shortid.generate()}
          type="button"
          name={option}
          onClick={leaveVote}
          className={css.button}
        >
          {option}
        </button>
      ))}
    </>
  );
};

Buttons.propTypes = {
  options: PropTypes.array.isRequired,
  leaveVote: PropTypes.func.isRequired,
};
