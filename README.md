# ♻️ Local Recycling Pickup Scheduler

A simple web app to schedule and view recycling pickups for different material types like plastic, paper, and metal.

🌐 **Live Demo**: [https://local-recycling-pickup-scheduler-vfl2.vercel.app/](https://local-recycling-pickup-scheduler-vfl2.vercel.app/)

---

## 🛠️ Features

* Schedule pickups with name, address, type, date, and time.
* View all scheduled pickups in a list.
* Backend powered by Express + MongoDB.
* Frontend built using React.

---

## 🚀 Installation & Setup

### 🔧 Prerequisites

* Node.js (v16+ recommended)
* MongoDB (local or Atlas)
* Git

---

### 📦 Clone the Repo

```bash
git clone https://github.com/Rahulverma0706/Local-Recycling-Pickup-Scheduler.git
cd Local-Recycling-Pickup-Scheduler
```

---

### ⚙️ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` folder with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Then run:

```bash
npm start
```

---

### 💻 Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file inside `client/` with:

```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

Then run:

```bash
npm run dev
```

---

## 📤 Deployment

* **Frontend** deployed on [Vercel](https://vercel.com)
* **Backend** deployed on [Render](https://render.com)

Make sure your frontend `.env` is pointing to the **Render backend URL**.

---

## 🧩 Future Improvements

* ✅ Form validation and error feedback
* 📩 Email confirmation on scheduling
* 📍 Google Maps integration for pickup locations
* 📊 Admin dashboard for viewing requests
* 📅 Calendar view of all scheduled pickups
* 🔐 Authentication for users and admin

---

## 🧑‍💻 Author

Made by [@Rahulverma0706](https://github.com/Rahulverma0706)

---

Let me know if you want me to turn this into `README.md` and push it to your repo.
