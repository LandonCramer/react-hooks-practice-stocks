import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolios, onRemoveStock}) {
  const stockList = portfolios.map((portfolio) => (
    <Stock key={portfolio.id} stock={portfolio} onStockClick={onRemoveStock} />
  ));

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stockList
      }
    </div>
  );
}

export default PortfolioContainer;