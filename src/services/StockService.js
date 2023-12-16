const STOCK_API_BASE_URL = 'https://api.example.com/stocks'; // Replace with actual API base URL

const StockService = {
  getStocks: async () => {
    try {
      const response = await fetch(`${STOCK_API_BASE_URL}/all`);
      if (!response.ok) {
        throw new Error('Failed to fetch stock data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  },
};

export default StockService;
