# AI App Template

## Overview

AI App Template is a modern, scalable, and customizable starter kit for building AI-powered web applications. It provides a solid foundation for developers to quickly create and deploy AI solutions with a user-friendly interface and robust backend.

## Features

- Full-stack Application: Next.js frontend with a FastAPI backend
- AI Integration: Easy integration with popular AI models (OpenAI GPT, Anthropic Claude, etc.)
- Authentication: User authentication and authorization system
- Responsive Design: Mobile-friendly UI built with Tailwind CSS
- API Management: Structured API endpoints for AI predictions and data handling
- Customizable: Easily extendable architecture for adding new features and AI models

## Prerequisites

- Node.js (v14 or later)
- Python (v3.8 or later)
- npm or yarn
- pip

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ai-app-template.git
   cd ai-app-template
   ```

2. Set up the backend:
   ```
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```

3. Set up the frontend:
   ```
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
   AI_MODEL=gpt3_5
   OPENAI_API_KEY=your_openai_api_key
   ANTHROPIC_API_KEY=your_anthropic_api_key
   ```

5. Start the backend server:
   ```
   cd backend
   uvicorn app.main:app --reload
   ```

6. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:3000`

## Customization

- Add new AI models in `backend/app/models/`
- Create new API endpoints in `backend/app/routes/`
- Modify the frontend components in `frontend/components/`
- Add new pages in `frontend/pages/`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
