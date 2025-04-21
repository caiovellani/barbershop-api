# Barbershop API 💈

A RESTful API designed to manage barbershop operations such as appointments, clients, services, and barbers. Built with scalability and maintainability in mind, this backend is intended to power modern barbershop platforms or mobile applications.

## 🚀 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for Node
- **TypeScript** – Strongly typed JavaScript
- **Prisma ORM** – Database management and migrations
- **PostgreSQL** – Relational database
- **Zod** – Runtime schema validation
- **JWT** – Authentication via JSON Web Tokens

## 📦 Features

- User authentication (JWT-based)
- CRUD for:
  - Appointments
  - Clients
  - Services
  - Barbers
- Schedule availability
- Role-based access (Admin/Barber/Client)
- Input validation with Zod
- Database schema with Prisma

## Getting Started

### Clone the repository
```bash
git clone https://github.com/caiovellani/barbershop-api.git
```

### Install dependencies
```bash
npm install
```
### Set up environment variables
```bash
cp .env.example .env
```

### Run migrations (ensure DB is running)
```bash
npx prisma migrate dev
```

### Start the server
```bash
pnpm dev
```

## Server will run at http://localhost:3333
