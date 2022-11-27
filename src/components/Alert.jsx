const Alert = ({ type, msg }) => {
  return (
    <div className={`alert ${type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
