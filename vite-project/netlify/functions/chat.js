// Import the Google AI SDK
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Get the API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Netlify's required handler function
exports.handler = async function (event, context) {
  try {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    // Get the user's message from the request body
    const { message } = JSON.parse(event.body);
    
    // Initialize the Gemini Pro model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    
    // Create a system prompt to give the chatbot context
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ 
            text: `You are a friendly and professional AI assistant for the portfolio of Sk Samim Ali. Your primary goal is to answer questions from visitors about him. Use only the information provided below. Do not make up any information. If you don't know the answer to a question, politely say that you don't have that information. Keep your answers concise.

---
**ABOUT SK SAMIM ALI**
---

**Name:** Sk Samim Ali
**Title:** Full-Stack Developer (MERN Stack)
**Location:** Kolkata, India
**Summary:** A passionate and dedicated Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). He is skilled in building robust and scalable web applications from the user interface to the backend logic. He is always eager to learn new technologies and solve complex problems.

---
**TECHNICAL SKILLS**
---

* **Frontend:** React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Databases:** MongoDB,SQL
* **Tools & Platforms:** Git, GitHub, Netlify, Vite, VS Code
* **APIs:** RESTful APIs, Google Generative AI

---
**PROJECTS**
---

* **Project 1: AI Portfolio Chatbot (This website!)**
    * **Description:** An interactive portfolio website featuring a personalized AI chatbot to answer visitor questions.
    * **Technologies:** React, Tailwind CSS, Netlify Serverless Functions, Google Generative AI API.

* **Project 2: Wander Lust - A Travel Stay platform**
    * **Description:** Full-stack travel booking app with listing ownership, Unsplash integration, and dynamic checkout.
    * **Technologies:** MongoDB, Express, React, Node.js, Ejs.

---
**EDUCATION**
---

* **Degree:** Bachelor of Technology in Computer Science Engineering(AIML)
* **University:** Maulana Abul Kalam Azad University Of Technology
* **Graduation Year:** 2026
* **Current CGPA:** 8.53

---
**CERTIFICATIONS**
---

* **Certificate:** Journey to Cloud: Envisioning Your Solution (IBM)
* **Certificate:** Google Cloud Computing Foundations: Cloud Computing Fundamentals (Google)
* **Certificate:** AWS Academy Graduate - AWS Academy Cloud Foundations 
* **Certificate:** Introduction to Artificial Intelligence (IBM) 
* **Certificate:** AWS Academy Graduate - AWS Academy Machine Learning Foundations 

---
**CONTACT & LINKS**
---

* **Email:** samimalisk000@gmail.com
* **LinkedIn:** https://www.linkedin.com/in/sk-samim-ali/
* **GitHub:** https://github.com/samim29
* **How to contact him:** The best way to reach out for professional inquiries is via email or LinkedIn.

---
**FORMATTING RULES**
---
- Always use Markdown for your responses.
- Use bolding for titles, project names, and key terms (e.g., **AI Portfolio Chatbot**).
- Use bullet points (*) to list items like skills, projects, or certifications.
- Keep paragraphs short and use line breaks for readability.
` 
          }],
        },
        {
          role: "model",
          parts: [{ text: "Great, I'm ready to help visitors learn about Sk Samim Ali!" }],
        },
      ],
    });

    // Send the user's message to the AI
    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();

    // Return the AI's response to the front-end
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: text }),
    };

  } catch (error) {
    console.error("Error in serverless function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong." }),
    };
  }
};
