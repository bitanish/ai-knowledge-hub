# AI Knowledge Retrieval Platform (RAG)

A **full-stack Retrieval-Augmented Generation (RAG) system** that enables document upload, semantic search, and context-aware multi-turn querying. Built with **Django, React, FAISS, and OpenAI embeddings**, the platform supports real-time knowledge retrieval with source citation, low-latency responses, and enterprise-grade deployment.

---

## 🚀 Features

* **Document Upload & Management**: Users can upload and manage knowledge sources.
* **Semantic Search (FAISS)**: Vector-based similarity search over 10K+ documents.
* **Context-Aware Multi-Turn Querying**: Maintains conversation state across queries.
* **Source Citation**: Each answer includes references to the original documents.
* **Authentication & Authorization**: JWT-based auth integrated into frontend and backend.
* **Monitoring & Metrics**: Prometheus + Grafana for observability.
* **Scalable Deployment**: Dockerized services deployed on AWS.

---

## 📂 Project Structure

```bash
ai-knowledge-hub/
│
├── backend/
│   ├── src/
│   │   ├── analytics_app/       # Metrics and analytics logic
│   │   ├── auth_app/            # JWT authentication & user management
│   │   ├── chats_app/           # Multi-turn query handling
│   │   ├── config/              # Django project configuration
│   │   ├── documents_app/       # Document upload & processing
│   │   └── __init__.py
│   ├── db.sqlite3               # Local development DB
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── assets/              # Images, logos, etc.
│   │   ├── components/          # Reusable React components
│   │   ├── pages/               # React pages (Login, Upload, Chat, Dashboard)
│   │   ├── App.jsx              # Root component
│   │   └── main.jsx             # React entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── monitoring/
│   ├── prometheus.yml           # Prometheus config
│   └── Dockerfile               # Monitoring service container
│
├── docker-compose.yml           # Local orchestration
├── .gitignore
└── README.md
```

---

## ⚙️ Tech Stack

* **LLM & Retrieval**: OpenAI Embeddings + FAISS for semantic search
* **Backend**: Django REST Framework (JWT auth, APIs)
* **Frontend**: React + Vite + Material UI
* **Database**: SQLite (dev) / PostgreSQL (prod)
* **Monitoring**: Prometheus + Grafana
* **Deployment**: AWS (ECS, S3, CloudFront), Docker

---

## 📊 Workflow

1. **User uploads documents** → stored and embedded using OpenAI.
2. **FAISS index built** → supports fast semantic similarity search.
3. **User queries** → system retrieves relevant chunks.
4. **LLM generates response** → augmented with retrieved context + citations.
5. **Frontend displays** → interactive chat UI with multi-turn support.

---

## 🛠️ Setup & Installation

### 1. Clone Repository

```bash
git clone https://github.com/bitanish/ai-knowledge-hub.git
cd ai-knowledge-hub
```

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### 4. Local Orchestration (Docker Compose)

```bash
docker-compose up --build
```

---

## 🌐 Deployment

* **Backend** → Django REST API deployed on AWS ECS
* **Frontend** → React app hosted on S3 + CloudFront
* **Database** → PostgreSQL on AWS RDS
* **Monitoring** → Prometheus + Grafana stack via Docker

---

## 📌 Roadmap

* [ ] Add support for additional vector stores (e.g., Pinecone, Weaviate)
* [ ] Implement role-based access control (RBAC)
* [ ] Add fine-tuned domain-specific models
* [ ] Enhance monitoring dashboards with query latency histograms

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

MIT License – free to use and adapt.
