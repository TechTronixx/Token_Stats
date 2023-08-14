const Card = ({ title, value }) => {
  const formatter = new Intl.NumberFormat("en-US");
  return (
    <div className="Card">
      <h3>{title}</h3>
      <p>{formatter.format(value)}</p>
    </div>
  );
};

export default Card;
