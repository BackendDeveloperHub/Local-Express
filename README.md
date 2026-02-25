# 🚚 Local Express – Local Delivery Service

Local Express is a local pickup & drop delivery service designed for small items like documents, laptops, keys, and parcels.
This project focuses on providing fast, affordable, and reliable delivery within a local area.

## ✨ Features
- 📦 Small item pickup & drop
- 📍 Local area based delivery
- 👤 User & Delivery Partner roles
- 📄 Real-time Order creation (Unique ID generation)
- 🔐 Secure backend APIs with FastAPI
- ⚡ Modern UI with React

## 📂 Project Structure
```text
Local-Express/
├── Backend/                 # FastAPI Backend
│   ├── database.py          # Shared mock database
│   ├── main.py              # FastAPI entry point
│   ├── routes/              # API endpoints (Auth, Delivery, Orders, etc.)
│   ├── schemas/             # Pydantic data models
│   ├── venv/                # Python Virtual Environment
│   └── requirements.txt     # Backend dependencies
├── Frontend/                
│   └── frontend/            # React App
│       ├── src/
│       │   ├── components/  # Reusable UI components
│       │   ├── pages/       # Application screens
│       │   └── App.js       # Main routing logic
│       └── package.json     # Frontend dependencies
```

## 🛠 Tech Stack
### Frontend
- **React.js**
- **Axios** (API integration)
- **React Hot Toast** (Notifications)
- **Vanilla CSS** (Custom Styling)

### Backend
- **FastAPI**
- **Python**
- **Pydantic** (Data validation)
- **Uvicorn** (ASGI Server)

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/BackendDeveloperHub/Local-Express.git
cd Local-Express
```

### 2️⃣ Backend Setup
```bash
cd Backend
# Activate virtual environment
source venv/bin/activate  # Mac/Linux
# .\venv\Scripts\activate  # Windows

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn main:app --reload --port 8000
```
- **API URL:** [http://127.0.0.1:8000](http://127.0.0.1:8000)
- **Interactive Docs:** [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

### 3️⃣ Frontend Setup
```bash
cd Frontend/frontend
npm install
npm start
```
- **App URL:** [http://localhost:3000](http://localhost:3000)

## 💡 Developer Notes
- **Mock Data**: The backend uses `Backend/database.py` for state management in memory. Restarting the server will reset the order list.
