# healthy_paws

# HealthyPaws

HealthyPaws is a web application designed to manage pet profiles, allowing users to create, read, update, and delete pet information. The app is built using React for the front-end and Express with PostgreSQL for the back-end.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- Create new pet profiles
- Edit existing pet profiles
- View a list of all pets
- Search for pets
- User profile management
- Responsive design

## Tech Stack
- **Front-end**: React, React Router, SCSS
- **Back-end**: Express, PostgreSQL
- **Deployment**: Vercel (front-end), Heroku (back-end)

## Setup Instructions

### Prerequisites
- Node.js
- npm or yarn
- PostgreSQL

### Front-end Setup
1. Clone the front-end repository:
    ```sh
    git clone <frontend-repo-url>
    cd frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```sh
    VITE_API_URL=<your-backend-api-url>
    ```

4. Start the development server:
    ```sh
    npm start
    ```

### Back-end Setup
1. Clone the back-end repository:
    ```sh
    git clone <backend-repo-url>
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```sh
    PORT=5000
    DATABASE_URL=<your-postgresql-url>
    ```

4. Start the development server:
    ```sh
    npm start
    ```

### Database Setup
1. Create a PostgreSQL database.
2. Run the database migrations to create necessary tables:
    ```sh
    npm run migrate
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000` to use the application.

## Project Structure

### Front-end
