# 🏋️ Gym Workout Planner

A simple React application that allows users to browse muscle groups, explore exercises, and build their own workout plan.

---

## 🚀 Features

* Browse **different muscle groups**
* Open a modal with **exercises for the selected muscle**
* **Add exercises** to a personal workout plan
* **Remove exercises** from the plan
* **Show / hide** the workout plan
* Responsive layout using **TailwindCSS**

---

## 🛠 Tech Stack

* React
* JavaScript (ES6)
* TailwindCSS
* Vite

---

## 📂 Project Structure

```
src
 ├ components
 │   ├ MuscleCard.jsx
 │   ├ Excercises.jsx
 │   └ Plan.jsx
 │
 ├ data
 │   └ muscles.js
 │
 ├ App.jsx
 └ main.jsx
```

---

## ⚙️ How It Works

1. The user selects a **muscle group**.
2. A modal window opens with a list of **exercises**.
3. Clicking **Add to plan** adds the exercise to the workout plan.
4. The workout plan is stored in **React state**.
5. Exercises can be **removed** from the plan.

Example structure of the workout plan state:

```
[
  {
    id: 171000111,
    exercise: "Chest: Bench Press"
  },
  {
    id: 171000222,
    exercise: "Back: Pull Ups"
  }
]
```

---

## 💻 Installation

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```

Go to the project folder:

```
cd YOUR_REPOSITORY_NAME
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

---

## 🎯 Learning Goals

This project was created to practice:

* React component structure
* State management with `useState`
* Passing data through props
* Rendering lists with `map`
* Updating arrays immutably
* Basic UI with TailwindCSS

---

## 📌 Future Improvements

* Save workout plan in **localStorage**
* Add **drag & drop** to reorder exercises
* Add **animations**
* Improve UI design
* Add exercise images

---

## 📄 License

This project was created for learning purposes.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
