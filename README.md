# 🏋️ Análise Fit

A full-stack web platform for deep statistical analysis of workout sessions — strength training, running, cycling, and more.

> Most fitness apps let you log workouts. **Análise Fit** tells you what to do with that data.

---

## 📌 Overview

Apps like Strava and Hevy are great for recording activity, but they offer limited insight into long-term performance trends. Análise Fit centralizes your workout data and automatically generates meaningful analytics — including overtraining risk detection, strength progression tracking, and weekly load trends.

---

## ✨ Features

### MVP
- 🔐 User authentication (sign up / sign in)
- 🏋️ Manual strength training session logging
- 🚴 Strava integration for importing runs, walks, and cycling sessions
- 📊 Core statistics dashboard

### Planned
- 👤 Account management
- 👥 Follow other users
- 🏆 User competitions based on defined goals

---

## 📊 Analytics

### Strength Training
- Load progression per exercise over time
- Total weekly training volume
- Workout frequency tracking

### Running / Walking / Cycling
- Weekly mileage
- Average pace
- Pace progression over time

### General
- **Overtraining detection** — flags abrupt spikes in weekly training volume

---

## 👥 Target Users

| User Type | Goals |
|---|---|
| Beginners | Understand if they're progressing; simple, readable metrics |
| Intermediate / Advanced | Deep performance analysis; load and pace insights |

---

## 🔄 User Flows

**1. Log a strength session**
1. Authenticated user navigates to the Workouts page
2. Adds a strength training session manually
3. System saves the session
4. Session appears in the workout list
5. Metrics update automatically

**2. Import a cardio session (Strava)**
1. Authenticated user navigates to the Workouts page
2. Imports a session via the Strava API
3. System saves the session
4. Session appears in the workout list
5. Metrics update automatically

**3. View statistics**
1. Authenticated user navigates to the Analytics page
2. Selects the exercise or activity type to analyze
3. Views detailed statistics and charts

**4. Manage account**
1. Authenticated user navigates to the Account page
2. Updates profile data
3. System saves the changes
4. Account page reflects updated information

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Backend | Node.js + Express |
| ORM | Prisma |
| Database | PostgreSQL |
| External API | Strava API |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL
- A [Strava API](https://developers.strava.com/) application (for cardio imports)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/analise-fit.git
cd analise-fit
```

**Backend**
```bash
cd backend
npm install
npm run dev
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in `/server` based on `.env.example`:

```env
JWT_SECRET=your_jwt_secret
```

---

## 🗺️ Roadmap

- [x] Project planning and architecture
- [x] Authentication (sign up / sign in)
- [ ] Strength training session CRUD
- [ ] Strava OAuth + session import
- [ ] Analytics dashboard (strength)
- [ ] Analytics dashboard (cardio)
- [ ] Overtraining detection algorithm
- [ ] Account management
- [ ] Social features (follow users, competitions)