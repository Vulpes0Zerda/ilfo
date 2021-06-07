const Points = ({ ptsSpend, ptsSum }) => {
  return (
    <div className="header__pts">
      Available: <span>{ptsSum}</span>
      <br />
      Spent: <span>{ptsSpend}</span>
    </div>
  );
};

Points.defaultProps = {
  ptsSpend: 0,
  ptsSum: 95,
};

export default Points;
