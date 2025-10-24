# Marqa Souq E-Commerce Platform

A modern, scalable e-commerce platform built with MedusaJS, Next.js, and PostgreSQL with Odoo ERP integration.

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18+ installed
- PostgreSQL 14+ installed
- Git installed
- VS Code (recommended)

### 1. Environment Setup
```bash
# Clone this repository
git clone <your-repo-url>
cd v-2-medusa-ecommo

# Install dependencies for backend
cd backend
npm install

# Install dependencies for frontend
cd ../frontend
npm install
```

### 2. Database Setup
```bash
# Create PostgreSQL database
createdb marqa_souq_v2

# Update environment variables in backend/.env
DATABASE_URL=postgres://marqa_user:marqa123@localhost:5432/marqa_souq_v2
```

### 3. Start Development
```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Start frontend
cd frontend
npm run dev
```

## 📁 Project Structure
```
v-2-medusa-ecommo/
├── backend/           # MedusaJS Backend
├── frontend/          # Next.js Frontend
├── odoo-integration/  # Odoo Integration
├── deployment/        # Deployment configs
├── docs/             # Documentation
└── scripts/          # Automation scripts
```

## 🎯 Current Status
- [x] Project structure created
- [ ] Backend setup (Week 1)
- [ ] Frontend setup (Week 1)
- [ ] Core features (Week 2-3)
- [ ] UI Development (Week 4-5)
- [ ] Integrations (Week 6-7)
- [ ] Testing & Deployment (Week 8)

## 📖 Documentation
- [Complete Project Plan](./PROJECT_PLAN.md)
- [Setup Instructions](./docs/SETUP.md)
- [Development Guide](./docs/DEVELOPMENT.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## 🛠️ Technology Stack
- **Backend:** MedusaJS (Node.js)
- **Frontend:** Next.js 13+ with React 18
- **Database:** PostgreSQL
- **Styling:** Tailwind CSS
- **ERP:** Odoo Integration
- **Payment:** Stripe/PayPal
- **Deployment:** Docker + Nginx

## 📞 Support
For questions or issues, please check the documentation or create an issue in this repository.