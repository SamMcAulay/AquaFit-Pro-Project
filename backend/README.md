# 🏊 AquaFit Pro – Backend

The AquaFit Pro backend is built using **NestJS**, **Prisma ORM**, and **PostgreSQL**.  
It powers the swimming pool class booking system, handling users, courses, bookings, and authentication.

---

## 🧱 Tech Stack

- Node.js
- NestJS
- Prisma ORM
- PostgreSQL
- Swagger (API Documentation)
- Docker (recommended for local database)

---

## 📦 Prerequisites

Make sure you have installed:

- Node.js (v18+ recommended)
- npm
- Docker (recommended)
- Git

---

## 🚀 Getting Started (Development)

### 1️⃣ Install Dependencies

```bash
npm install
```

---

### 2️⃣ Configure Environment Variables

Copy the example environment file:

**Mac / Linux**
```bash
cp .env.example .env
```

**Windows PowerShell**
```powershell
Copy-Item .env.example .env
```

Example `.env`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/swimming_pool_db?schema=public"
JWT_SECRET="replace-me"
JWT_EXPIRES_IN="1d"
```

⚠️ Do not commit `.env` to version control.

---

### 3️⃣ Start PostgreSQL

#### Option A (Recommended): Docker

```bash
docker compose up -d
```

This starts PostgreSQL locally on port `5432`.

#### Option B: Local PostgreSQL Install

Create a database named:

```
swimming_pool_db
```

Ensure credentials match your `DATABASE_URL`.

---

### 4️⃣ Run Database Migrations

```bash
npx prisma migrate dev
npx prisma generate
```

This will:
- Apply all migrations
- Generate the Prisma client

---

### 5️⃣ Start the Backend

```bash
npm run start:dev
```

Backend will run at:

```
http://localhost:3000
```

Swagger documentation:

```
http://localhost:3000/api
```

---

## 📂 Project Structure

```
src/
 ├── prisma/          # Prisma integration (service + module)
 ├── users/           # Users module
 ├── courses/         # Courses module
 ├── bookings/        # Bookings module
 ├── auth/            # Authentication (planned / in progress)

prisma/
 ├── schema.prisma    # Database schema
 ├── migrations/      # Migration history
```

---

## 🔐 User Roles (Planned)

- **Admin** – Full system control
- **Instructor** – Manage courses and view bookings
- **Member** – Book and manage personal classes

---

## 🧪 Testing

```bash
npm run test
```

---

## 🛠️ Database Changes

If you modify `schema.prisma`, run:

```bash
npx prisma migrate dev --name describe_change
```

---

## 🚀 Production Deployment

In production:

```bash
npx prisma migrate deploy
npm run build
npm run start:prod
```

Ensure production environment variables are configured securely in your hosting platform.

---

## 📘 API Documentation

Interactive Swagger UI:

```
http://localhost:3000/api
```

Use it to test endpoints during development.

---

## 📜 License

This backend is part of the AquaFit Pro full-stack application.