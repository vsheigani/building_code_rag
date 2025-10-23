# Building Code RAG System

A Retrieval-Augmented Generation (RAG) system for answering questions from building code documents. This project consists of a React frontend and FastAPI backend that work together to provide intelligent question-answering capabilities for construction and building code documentation.

## 🏗️ Architecture

- **Frontend**: React 19 with TypeScript, Vite, and Tailwind CSS
- **Backend**: FastAPI with Python 3.12+ and Pydantic
- **API**: Auto-generated TypeScript client from OpenAPI specification
- **Deployment**: Docker containerization with multi-stage builds

## 🚀 Features

- **RAG-powered Q&A**: Intelligent question answering using building code documents
- **Modern UI**: Clean, responsive interface built with React and Tailwind CSS
- **Type-safe API**: Auto-generated TypeScript client ensures type safety
- **Real-time Communication**: FastAPI backend with CORS support
- **Docker Ready**: Containerized for easy deployment and scaling

## 📁 Project Structure

```
building_code/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/ui/    # Reusable UI components
│   │   ├── clients/          # Auto-generated API client
│   │   └── App.tsx          # Main application component
│   ├── package.json
│   └── vite.config.ts
├── backend/                  # FastAPI backend application
│   ├── app/
│   │   ├── api/             # API routes and endpoints
│   │   ├── schemas/         # Pydantic data models
│   │   └── main.py          # FastAPI application entry point
│   ├── pyproject.toml
│   └── Dockerfile
├── scripts/                  # Utility scripts
│   └── generate_client_types.sh
└── Dockerfile               # Multi-stage production build
```

## 🛠️ Prerequisites

- **Node.js** 24+ and **pnpm** 10.19.0+
- **Python** 3.12+
- **uv** (Python package manager)
- **Docker** (optional, for containerized deployment)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd building_code
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies using uv
uv sync

# Activate virtual environment
source .venv/bin/activate

# Run the development server
python main.py
```

The backend will be available at `http://localhost:8000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
pnpm install

# Generate API client types
cd ../scripts
./generate_client_types.sh
cd ../frontend

# Start the development server
pnpm run dev
```

The frontend will be available at `http://localhost:5173`

### 4. Environment Configuration

Create a `.env` file in the root directory:

```env
PROJECT_NAME="Building Code RAG System"
FRONTEND_HOST="http://localhost:5173"
BACKEND_CORS_ORIGINS="http://localhost:5173,http://localhost:3000"
ENVIRONMENT="local"
```

## 🐳 Docker Deployment

### Development with Docker Compose

```bash
# Build and run both services
docker-compose up --build
```

### Production Build

```bash
# Build the production image
docker build -t building-code-rag .

# Run the container
docker run -p 80:80 building-code-rag
```

## 📚 API Documentation

Once the backend is running, you can access:

- **Interactive API Docs**: `http://localhost:8000/docs`
- **OpenAPI Schema**: `http://localhost:8000/api/v1/openapi.json`

## 🔧 Development

### Generating API Client Types

The frontend uses auto-generated TypeScript types from the FastAPI OpenAPI specification:

```bash
cd scripts
./generate_client_types.sh
```

This script:
1. Extracts the OpenAPI schema from the FastAPI backend
2. Generates TypeScript types and client code
3. Places the generated files in the frontend

### Available Scripts

**Frontend:**
- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint

**Backend:**
- `uv run fastapi dev app/main.py` - Start development server
- `uv run fastapi run app/main.py` - Start production server

## 🏗️ Building Code Integration

This system is designed to work with building code documents. The RAG implementation will:

1. **Ingest** building code documents and regulations
2. **Process** and index the content for efficient retrieval
3. **Answer** questions by retrieving relevant code sections
4. **Generate** contextual responses based on the retrieved information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vahid Sheigani** - [v.sheigani@gmail.com](mailto:v.sheigani@gmail.com)

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the [Issues](https://github.com/your-username/building_code/issues) page
2. Create a new issue with detailed information
3. Contact the maintainer directly

---

**Note**: This is a development project for RAG-based building code question answering. The system is designed to be extensible and can be adapted for various document types and use cases.
