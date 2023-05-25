import { nanoid } from 'nanoid';

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
