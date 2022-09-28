import shortid from 'shortid';
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
