```markdown
# Fullstack Dockerized Template (Next.js + NestJS + Postgres + Redis)

A ready-to-use fullstack template with:

- NestJS backend with Prisma & Redis
- Next.js frontend with ShadCN, Framer Motion & React Query
- PostgreSQL database
- Redis caching
- Dockerized for development & production
- Hot reload support in dev mode

---

## Features

- Fully configured backend & frontend
- Docker Compose setup to run everything at once
- Hot reload for development
- Health-check endpoint for backend
- `.env` configuration for easy environment setup

---

## Requirements

- Docker
- Docker Compose
- pnpm

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/fullstack-template.git
cd fullstack-template
```

### 2. Copy `.env.example`

```bash
cp .env.example .env
```

* Update any required values (ports, database URL, Redis URL, etc.)

### 3. Start development environment

```bash
make dev
```

* Backend: `http://localhost:5000`
* Frontend: `http://localhost:3000`
* Health check: `http://localhost:5000/health`

---

## Makefile Commands

| Command      | Description                                      |
| ------------ | ------------------------------------------------ |
| `make dev`   | Start backend & frontend with hot reload         |
| `make down`  | Stop all running containers                      |
| `make build` | Rebuild backend & frontend Docker images         |
| `make clean` | Clean containers, volumes, and images completely |

---

## Project Structure

```
fullstack-template/
│
├─ backend/               # NestJS backend with Prisma & Redis
├─ frontend/              # Next.js frontend with ShadCN & Framer Motion
├─ docker-compose.yml     # Base Docker Compose configuration
├─ docker-compose.override.yml # Dev override for hot reload
├─ Makefile               # Convenient commands
└─ .env.example           # Environment variable template
```

---

## Environment Variables

Your `.env` file should include:

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

* Copy `.env.example` → `.env` and update as needed.

---

## Customization

* Change ports (`BACKEND_PORT`, `FRONTEND_PORT`) in `.env`
* Change database or Redis URL in `.env`
* Add environment variables as needed
* Swap DB or caching services by editing Docker Compose files

---

## Hot Reload / Live Reload

* Backend: NestJS watches for changes and reloads automatically (`start:dev`)
* Frontend: Next.js hot reload updates browser instantly (`next dev -H 0.0.0.0`)

---

## Health Check

Backend provides a health endpoint:

```http
GET http://localhost:5000/health
```

Response:

```json
{
  "database": "connected",
  "redis": "connected"
}
```

* Confirms connectivity to PostgreSQL and Redis

---

## Running in Production

1. Ensure you have all environment variables set in `.env`.
2. Build the Docker images:

```bash
make build
```

3. Start the containers:

```bash
docker-compose up -d
```

* Backend: `http://localhost:5000`
* Frontend: `http://localhost:3000`

4. Stop containers:

```bash
make down
```

---

## Troubleshooting

| Issue                           | Solution                                                                                  |
| ------------------------------- | ----------------------------------------------------------------------------------------- |
| Backend not accessible          | Ensure `main.ts` binds to `0.0.0.0` and Docker ports are mapped correctly                 |
| Frontend hot reload not working | Ensure `next dev -H 0.0.0.0` and volume mounts are correct                                |
| Database connection fails       | Check `DATABASE_URL` in `.env` and that Postgres container is running                     |
| Redis connection fails          | Check `REDIS_URL` in `.env` and that Redis container is running                           |
| Docker build errors             | Ensure Dockerfiles are named `Dockerfile` (case-sensitive) and dependencies are installed |

---

## Useful Tips for Developers

* **Adding new environment variables:** Add them to `.env.example` and update Docker Compose environment section.
* **Switching database:** Replace Postgres with another DB by editing Docker Compose and updating Prisma schema.
* **Frontend customization:** ShadCN and Framer Motion are preconfigured — you can add components directly.
* **Backend customization:** Prisma is ready with database URL from `.env`; Redis caching is ready via `RedisService`.

---

## Recommended Workflow

1. Clone repository and copy `.env.example` → `.env`
2. Run development environment:

```bash
make dev
```

3. Make code changes:

   * Backend changes auto-reload via NestJS
   * Frontend changes auto-reload via Next.js
4. Test backend health endpoint: `http://localhost:5000/health`
5. Stop environment when done: `make down`

---

## Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a new branch for your feature/fix
3. Make changes
4. Test using `make dev`
5. Submit a pull request

---

## License

MIT License

---

## Optional Enhancements

* Add production Docker Compose (`docker-compose.prod.yml`)
* Add automated CI/CD workflow (GitHub Actions)
* Add pre-configured tests (Jest for backend, React Testing Library for frontend)
* Include screenshots or demo GIFs for better presentation

```
```
