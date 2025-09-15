import express from 'express';
import Groq from 'groq-sdk';
import { GROQ_API_KEY }  from '../config.js'

const router = express.Router();
const groq = new Groq({
    apiKey: GROQ_API_KEY
});

router.post('/suggestion', async (req, res) => {
    try {
        const prompt = req.body?.message;

        if (!prompt?.trim() || prompt.length > 100) {
            return res.status(400).json({ message: 'Message invalid.' })
        }   

        const chatCompletion = await groq.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [
                { 
                    role: "user",
                    content: prompt 
                }
            ],
            temperature: 1,
            max_completion_tokens: 200,
            top_p: 1,
            stream: false
        });

        res.status(200).json(chatCompletion.choices[0].message.content ?? '');
    } catch (err) {
        res.status(500).json({ message: 'An error occurred on the server, please try again.' });
    }
});

export default router