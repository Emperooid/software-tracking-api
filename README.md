# Subscription Tracker API

A Node.js RESTful API for managing users and their subscriptions, built with Express and MongoDB.

## Features

- User authentication (sign up, sign in, sign out)
- User management (CRUD)
- Subscription management (CRUD, activate, deactivate, cancel, upcoming renewals)
- Error handling middleware
- Environment-based configuration

## Project Structure

```
.
├── app.js
├── config/
│   └── env.js
├── controllers/
│   └── auth.controllers.js
├── database/
│   └── mongodb.js
├── middlewares/
│   └── error.middleware.js
├── models/
│   ├── subscription.model.js
│   └── user.model.js
├── routes/
│   ├── auth.routes.js
│   ├── subscription.routes.js
│   └── user.routes.js
├── .env.development.local
├── .env.production.local
├── .gitignore
├── eslint.config.js
├── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas or local MongoDB instance

### Installation

1. Clone the repository:
    ```sh
    git clone <repo-url>
    cd <project-directory>
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Configure environment variables:
    - Copy `.env.development.local` and `.env.production.local` as needed.
    - Set your MongoDB URI and JWT secret in `.env.development.local`.

4. Start the development server:
    ```sh
    npm run dev
    ```

   Or for production:
    ```sh
    npm start
    ```

## API Endpoints

### Auth

- `POST /api/v1/auth/sign-up` — Register a new user
- `POST /api/v1/auth/sign-in` — Login
- `POST /api/v1/auth/sign-out` — Logout

### Users

- `GET /api/v1/users/` — Get all users
- `GET /api/v1/users/:id` — Get user details
- `POST /api/v1/users/` — Create user
- `POST /api/v1/users/:id` — Update user
- `DELETE /api/v1/users/:id` — Delete user

### Subscriptions

- `GET /api/v1/subscriptions/` — Get all subscriptions
- `GET /api/v1/subscriptions/:id` — Get subscription by ID
- `POST /api/v1/subscriptions/` — Create subscription
- `PUT /api/v1/subscriptions/:id` — Update subscription
- `DELETE /api/v1/subscriptions/:id` — Delete subscription
- `GET /api/v1/subscriptions/user/:id/` — Get all subscriptions for a user
-
