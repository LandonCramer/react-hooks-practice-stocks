import React, { useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([])
  const [filterBy, setFilterBy] = useState("Tech");

  const filteredStocks = stocks.filter(
    (stock) => stock.type === filterBy
  );
  
  function handleRemoveStock(stockToRemove) {
    setPortfolio((portfolio) => portfolio.filter((stock) => stock.id !== stockToRemove.id))
  }
  function addStockPortfolio(stockAdd) {
   const add = stocks.filter((stock) => stock.id === stockAdd.id )
   setPortfolio(add)
  }
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then(setStocks);
  }, []);
  return (
    <div>
      <SearchBar filterBy={filterBy} onChangeFilter={setFilterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onAddStock={addStockPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolios={portfolio} onRemoveStock={handleRemoveStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;