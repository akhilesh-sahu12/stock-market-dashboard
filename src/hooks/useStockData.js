import { useState, useEffect } from 'react';
import StockService from '../services/StockService';

const useStockData = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const stockData = await StockService.getStocks();
        setStocks(stockData);
      } catch (error) {
        console.error(error.message);
        throw error;
      }
    };

    fetchStocks();
  }, []);

  return stocks;
};

export default useStockData;
