React Task 1 – Basic React Application
📌 Overview

This project is part of MERN Stack Training – Task 1.
It demonstrates the setup of a React application, exploration of its file structure, and creation of a simple component using JSX, props, and state.

🛠️ Steps Followed
1. Project Setup

Created a new React project using:

npx create-react-app my-app
cd my-app
npm start


Verified that the development server runs on http://localhost:3000.

2. File & Folder Structure

src/ → App code (components, styles, logic).

public/ → Static assets (index.html, icons).

node_modules/ → Installed dependencies.

package.json → Project dependencies and scripts.

package-lock.json → Locked dependency versions.

.gitignore → Files ignored by Git.

README.md → Documentation of the project.

3. Component Created

A custom Welcome component was created to display a personalized message and a counter button.

Welcome.js
import React, { useState } from "react";

function Welcome({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to React, {name} 🚀</h1>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Welcome;

Integrated in App.js
import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Vishesh" />
      </header>
    </div>
  );
}

export default App;

4. Development Workflow

Started the server using npm start.

Observed hot reloading → browser updates instantly when code changes.

📚 Observations & Learnings

React follows a component-based architecture.

Props are used to pass data to components.

State (useState) helps create dynamic, interactive UIs.

The development server provides a smooth workflow with live reloading.

✅ Expected Outcome

Successfully set up and configured a React app.

Understood folder and file structure.

Built a reusable component with props & state.

Practiced React development workflow with hot reloading.