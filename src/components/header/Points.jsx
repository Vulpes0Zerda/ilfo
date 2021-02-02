const Points = ({ ptsSpend, ptsSum }) => {
  return (
    <div id="pts">
      Available: <span id="ptsSum">{ptsSum}</span>
      <br />
      Spent: <span id="ptsSpend">{ptsSpend}</span>
    </div>
  );
};

Points.defaultProps = {
  ptsSpend: 0,
  ptsSum: 95,
};

export default Points;
