// This file contains utility functions for the AI Assistant section, which interacts with the OpenAI API to answer portfolio-related questions.

const OPENAI_API_KEY = 'your-api-key-here'; // Replace with your OpenAI API key

export const fetchAIResponse = async (prompt) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch AI response');
    }

    const data = await response.json();
    return data.choices[0].message.content;
};