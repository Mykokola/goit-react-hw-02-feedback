import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(e => {
        return (
          <button
            key={nanoid()}
            onClick={() => onLeaveFeedback(e)}
            type="button"
          >
            {e}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
