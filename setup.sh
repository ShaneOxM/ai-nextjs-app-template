#!/bin/bash

# Create necessary directories
mkdir -p backend/app/routes
mkdir -p frontend/styles

# Set up backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..

# Set up frontend
cd frontend
# Initialize Next.js project if package.json doesn't exist
if [ ! -f package.json ]; then
    npx create-next-app@latest . --typescript --eslint --tailwind --use-npm
fi
npm install
cd ..

# Set up features
python scripts/setup_features.py

# Start the backend
cd backend
uvicorn app.main:app --reload &
cd ..

# Start the frontend
cd frontend
npm run dev