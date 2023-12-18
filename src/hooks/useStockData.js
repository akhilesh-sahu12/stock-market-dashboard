// hooks/useStockData.js
import { useState, useEffect } from 'react';
import { fetchStockData } from '../services/StockService';

const useStockData = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStockData();
        setStockData(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching stock data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { stockData, loading, error };
};

export default useStockData;
