import OpenAI from 'openai';
import dotenv from "dotenv"

dotenv.config()
const openai = new OpenAI({
    apiKey: process.env.CHATGPT_API_KEY, // Ensure your API key is set
  });
  
export default openai
