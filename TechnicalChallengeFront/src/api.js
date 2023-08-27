import { apiBaseUrl } from "../config";
import axios from 'axios'

const API_BASE_URL = 'YOUR_API_ENDPOINT';

export const fetchPhones = async () => {
  const response = await axios.get(`$${apiBaseUrl}/phones`);
  return response.data;
};

export const fetchPhoneDetails = async (phoneId) => {
  const response = await axios.get(`${API_BASE_URL}/phones/${phoneId}`);
  return response.data;
};