const FeedbackButtons = ({ options }) =>
  options.map(({ name }, index) => <button key={name}>{name}</button>);

export default FeedbackButtons;
