# Contracthub 📋

A full-stack **Smart Contract Management System** built with **Node.js** and **React**.

Contracthub provides an intuitive interface to create, manage, and track smart contracts with a modern web application.

## Features

- 🚀 **Full-Stack Application** — Node.js backend (Express) + React frontend (Vite)
- 📝 **Contract Management** — Create, view, and manage contracts
- 🔄 **Real-time Updates** — Live contract status updates
- 🎨 **Modern UI** — Responsive design with gradient theme
- 🔌 **REST API** — Express backend with CORS support
- ⚡ **Fast Development** — Hot reload with Vite

## Project Structure

```
contracthub/
├── backend/              # Node.js/Express API server
│   ├── server.js        # Main server entry point
│   └── package.json     # Backend dependencies
├── frontend/            # React application
│   ├── src/
│   │   ├── App.jsx      # Main React component
│   │   ├── App.css      # Styling
│   │   └── index.jsx    # React entry point
│   ├── public/
│   │   └── index.html   # HTML template
│   ├── vite.config.js   # Vite configuration
│   └── package.json     # Frontend dependencies
├── package.json         # Root workspace configuration
└── README.md           # This file
```

## Requirements

- **Node.js** 16+ 
- **npm** 8+ (or yarn)

## Installation

### Install all dependencies:

```bash
npm run install-all
```

This installs dependencies for both backend and frontend.

## Development

### Start both backend and frontend simultaneously:

```bash
npm run dev
```

Or run them separately:

**Terminal 1 — Backend (Port 5000):**
```bash
npm run server
```

**Terminal 2 — Frontend (Port 3000):**
```bash
npm run client
```

### Access the application:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## Build

Build both frontend and backend for production:

```bash
npm run build
```

- Frontend build output: `frontend/dist/`
- Backend is ready to run with `npm start`

## Available API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/contracts` | Get all contracts |
| POST | `/api/contracts` | Create a new contract |

### Example POST request:

```bash
curl -X POST http://localhost:5000/api/contracts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Partnership Agreement",
    "description": "Contract details..."
  }'
```

## Environment Variables

Create a `.env` file in the `backend/` directory:

```
PORT=5000
NODE_ENV=development
```

## Running in Production

```bash
npm start
```

The backend will serve the built frontend as static files.

## Troubleshooting

### Port already in use
- **Port 5000**: `lsof -i :5000` and kill the process
- **Port 3000**: `lsof -i :3000` and kill the process

### CORS issues
- Ensure the backend is running on port 5000
- Frontend Vite config proxies API requests to backend

### Dependencies missing
```bash
npm run install-all
```

## License

MIT

## Support

For issues or contributions, please open a GitHub issue or pull request.