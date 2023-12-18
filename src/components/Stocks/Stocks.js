// components/Stocks/Stocks.js
import React from 'react';
import useStockData from '../../hooks/useStockData';

const Stocks = () => {
  const { stockData, loading, error } = useStockData();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Stocks</h2>
      <ul>
        {stockData.map((stock) => (
          <li key={stock.symbol}>
            <strong>{stock.symbol}</strong> - {stock.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stocks;
