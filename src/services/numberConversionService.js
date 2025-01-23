import axios from 'axios';
import { CONFIG } from '../config/constants';

export const convertNumber = async (number) => {
  try {
    const response = await axios.get(`${CONFIG.API.BASE_URL}${CONFIG.API.ENDPOINTS.ROMAN_NUMERAL}`, {
      params: { query: number }
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || 'An unexpected error occurred';
    throw new Error(errorMessage);
  }
};