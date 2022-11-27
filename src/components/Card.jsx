const Card = (props) => {
  const value = props.className ? props.className : undefined;
  return <div className={`card ${value}`}>{props.children}</div>;
};

export default Card;
