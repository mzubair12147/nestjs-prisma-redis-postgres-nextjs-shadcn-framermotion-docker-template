# Fullstack Docker Template (Next.js + NestJS + Postgres + Redis)

This is a simple fullstack starter with:

* **Backend:** NestJS + Prisma + Redis
* **Frontend:** Next.js + ShadCN + Framer Motion + React Query
* **Database:** PostgreSQL
* **Cache:** Redis
* **Dockerized** so you don’t have to set up each part manually
* **Hot reload** in dev mode

---

## What's available

* Backend and frontend already setup
* Docker Compose to run everything together
* Health check endpoint in the backend
* `.env` file for configuration

---

## Requirements

* Docker & Docker Compose
* [pnpm](https://pnpm.io)

---

## Getting Started

### 1. Clone the project

```bash
git clone https://github.com/yourusername/fullstack-template.git
cd fullstack-template
```

### 2. Setup `.env`

```bash
cp .env.example .env
```

Edit the file and update values if you need (like ports, DB name, etc).

### 3. Run in development

```bash
make dev
```

* Backend → [http://localhost:5000](http://localhost:5000)
* Frontend → [http://localhost:3000](http://localhost:3000)
* Health check → [http://localhost:5000/health](http://localhost:5000/health)

---

## Makefile Commands

| Command      | What it does                                    |
| ------------ | ----------------------------------------------- |
| `make dev`   | Start everything in dev mode (with hot reload)  |
| `make down`  | Stop containers                                 |
| `make build` | Build Docker images again                       |
| `make clean` | Remove everything (containers, volumes, images) |

---

## Folder Structure

```
fullstack-template/
│
├─ backend/        # NestJS backend
├─ frontend/       # Next.js frontend
├─ docker-compose.yml
├─ docker-compose.override.yml
├─ Makefile
└─ .env.example
```

---

## Example `.env`

```env
# Backend
BACKEND_PORT=5000
DATABASE_URL=postgresql://postgres:postgres@db:5432/mydb
REDIS_URL=redis://redis:6379

# Frontend
FRONTEND_PORT=3000
NEXT_PUBLIC_API_URL=http://localhost:5000

# Database
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=mydb
```

---

## Notes

* Backend auto-reloads with `start:dev`
* Frontend auto-reloads with `next dev`
* Health check endpoint returns DB + Redis status

```json
{
  "database": "connected",
  "redis": "connected"
}
```

---

## Production

1. Make sure `.env` is correct
2. Build images:

```bash
make build
```

3. Start containers:

```bash
docker-compose up -d
```

4. Stop:

```bash
make down
```

---

## Troubleshooting

* Backend not working → check if it’s bound to `0.0.0.0`
* Frontend reload not working → check `next dev -H 0.0.0.0` and volume mounts
* DB not connecting → check `DATABASE_URL` and Postgres container
* Redis not connecting → check `REDIS_URL` and Redis container