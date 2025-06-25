# Zorb

A modern full-stack application with authentication built using React, TypeScript, TanStack Router, TanStack Query, and Node.js.

## Features

- 🔐 **Authentication System**
  - User registration and login
  - JWT-based authentication with HTTP-only cookies
  - Protected routes with automatic redirects
  - Password hashing with bcrypt
  
- ⚛️ **Frontend**
  - React 19 with TypeScript
  - TanStack Router for routing with route guards
  - TanStack Query for state management and API calls
  - Tailwind CSS with custom components
  - Form validation with Zod and React Hook Form
  - Zustand for client-side state management

- 🚀 **Backend**
  - Node.js with Express
  - MongoDB with Mongoose
  - JWT authentication
  - Input validation with TypeBox
  - Comprehensive logging with Pino
  - Error handling middleware

## Tech Stack

### Frontend
- React 19
- TypeScript
- TanStack Router
- TanStack Query
- Tailwind CSS
- Zustand
- React Hook Form
- Zod validation
- Lucide React icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- TypeBox
- Pino logger

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zorb
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Set up environment variables:

Backend (`.env`):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/zorb
JWT_SECRET=your-jwt-secret
NODE_ENV=development
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5000`.

## API Endpoints

### Authentication
- `POST /auth/signup` - Register a new user
- `POST /auth/signin` - Login user
- `POST /auth/logout` - Logout user
- `GET /auth/check` - Check authentication status
- `PUT /auth/update-profile` - Update user profile

## Authentication Flow

1. **Registration**: Users can sign up with first name, last name (optional), email, and password
2. **Login**: Users authenticate with email and password
3. **JWT Tokens**: Stored in HTTP-only cookies for security
4. **Route Protection**: TanStack Router guards protect authenticated routes
5. **Auto-logout**: Invalid or expired tokens automatically log users out

## Project Structure

```
zorb/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── middlewares/     # Authentication & error middleware
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   ├── schemas/         # Validation schemas
│   │   ├── types/           # TypeScript types
│   │   └── utils/           # Utilities
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/      # React components
    │   ├── hooks/           # Custom hooks for API calls
    │   ├── routes/          # TanStack Router routes
    │   ├── store/           # Zustand stores
    │   └── types/           # TypeScript types
    └── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request
