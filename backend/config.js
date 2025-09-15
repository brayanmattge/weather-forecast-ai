import dotenv from 'dotenv';

dotenv.config();

if (!process.env.GROQ_API_KEY) {
  throw new Error('GROQ_API_KEY is not defined. Please check the .env file.');
}

export const GROQ_API_KEY = process.env.GROQ_API_KEY;