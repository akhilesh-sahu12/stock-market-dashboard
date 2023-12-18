// services/StockService.js
const BASE_URL = 'https://api.iex.cloud/v1';
const API_KEY = 'pk_f777befb6ebd45f4a3dd467b65844607'; // Replace with your actual API key

// Function to fetch stock data 
export const fetchStockData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/data/CORE/REF_DATA_IEX_SYMBOLS?token=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch stock data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stock data:', error.message);
    throw error;
  }
};
