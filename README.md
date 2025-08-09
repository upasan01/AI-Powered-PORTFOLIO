# AI-Powered Developer Portfolio

This is the official repository for my personal developer portfolio, a modern, interactive, and responsive single-page application designed to showcase my skills, projects, and experience. The standout feature is a personalized AI assistant that can answer visitor questions in real-time.

**Live Demo URL:**[(https://meetsamim.netlify.app/projects)]

---

## 🌟 Key Features

* **Interactive AI Chatbot:** Built with the **Google Generative AI API** and powered by **Netlify Serverless Functions**. The chatbot is trained on my personal and professional data to answer questions about my skills, projects, and background.
* **Seamless Contact Form:** A fully functional contact form integrated with **EmailJS**, allowing visitors to send messages directly to my inbox without needing a backend server.
* **Modern & Responsive Design:** Developed with **React** and styled with **Tailwind CSS** for a clean, mobile-first design that looks great on all devices.
* **Dynamic UI:** Features smooth animations and micro-interactions using **Framer Motion** to enhance the user experience.
* **Serverless Architecture:** The entire application is built without a traditional backend server, relying on serverless functions and third-party APIs for its dynamic capabilities.

---

## 🛠️ Tech Stack & Tools

* **Frontend:**
    * [React](https://reactjs.org/)
    * [Vite](https://vitejs.dev/)
    * [JavaScript (ES6+)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
    * [Tailwind CSS](https://tailwindcss.com/)
    * [Framer Motion](https://www.framer.com/motion/)
* **Backend (Serverless):**
    * [Netlify Serverless Functions](https://www.netlify.com/products/functions/)
* **APIs & Services:**
    * [Google Generative AI API](https://ai.google.dev/)
    * [EmailJS](https://www.emailjs.com/)
* **Deployment & Hosting:**
    * [Netlify](https://www.netlify.com/)
    * [Git & GitHub](https://github.com/)

---

## 🏗️ Architecture Overview

This project utilizes a **serverless architecture**, which is a modern approach to building web applications without managing traditional servers.

1.  The **frontend** is a static site built with React and Vite. It is served globally via Netlify's CDN for fast loading times.
2.  When a user interacts with the AI chatbot, the React application makes an API call to a **Netlify Serverless Function**.
3.  This serverless function, running on Node.js in the background, securely calls the **Google Generative AI API** with the user's prompt and my professional data.
4.  The AI's response is streamed back through the function to the React frontend and displayed to the user.
5.  The contact form works similarly by calling the **EmailJS API** directly from the client-side, eliminating the need for a backend mail server.

---

## 🚀 Getting Started: Local Setup

To run this project on your local machine, follow these steps:

### Prerequisites

* Node.js (v18 or later)
* npm or yarn
* A code editor (e.g., VS Code)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    cd your-repository-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a new file named `.env` in the root of your project and add your Google AI API key:
    ```
    VITE_GOOGLE_API_KEY=your_google_ai_api_key_here
    ```
    *Note: The `VITE_` prefix is necessary for Vite to expose the variable to the frontend.*

4.  **Run the development server:**
    This project uses the Netlify CLI to run the Vite dev server and the serverless functions together.
    ```bash
    npm install -g netlify-cli
    netlify dev
    ```
    Your application should now be running at `http://localhost:8888`.

---

## ☁️ Deployment

This project is configured for easy deployment on **Netlify**.

1.  **Push your code** to a GitHub repository.
2.  **Connect your GitHub repository** to your Netlify account.
3.  **Configure the build settings:**
    * **Build command:** `npm run build`
    * **Publish directory:** `dist`
4.  **Add your environment variable** in the Netlify UI under **Site settings > Build & deploy > Environment**:
    * **Key:** `GOOGLE_API_KEY`
    * **Value:** `your_google_ai_api_key_here`
    *(Note: For the serverless function, the key should not have the `VITE_` prefix).*

Netlify will automatically build and deploy your site and serverless function whenever you push new changes to your main branch.

---

## 📫 Contact

Sk Samim Ali – samimalisk000@gmail.com

Project Link: [(https://github.com/samim29/AI-Powered-PORTFOLIO/tree/main)]
