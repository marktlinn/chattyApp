# chattyApp

Simple chat app made with socket.io

<h2>
    <a href="https://chattyapp-demo.onrender.com/">View Demo*</a>
  </h2>
  *<sub>Note: The backend server is running on a free tier, which means after 20 minutes of inactivity it spins down. So, please be patient, starting from cold the server can take around 20 seconds to start up and respond.</sub>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Tech Stack](#space_invader-tech-stack)
  - [Features](#dart-features)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)

<!-- About the Project -->

## :star2: About the Project

<div align="center"> 
<img width="894" alt="Screenshot 2023-02-14 at 14 22 09" src="https://user-images.githubusercontent.com/88390425/218751279-b3e103c3-c18c-4b5a-83d5-a3acfc8d29cb.png">
</div>

### What is ChattyApp?

This is a simple Chat app, built to practice using socket.io, as I'm planning on implementing in further in future projects

<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
    <li><a href="https://reactrouter.com/en/main">React Router</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
    <li><a href="https://socket.io/">Socket.IO</a></li>
    
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://socket.io/">Socket.IO</a></li>
  </ul>
</details>

<!-- Features -->

### :dart: Features

- Choose and enter a chat room
- Messaging Other users in the room

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

This project uses NPM as package manager

```bash
 npm install
```

<!-- Installation -->

### :gear: Installation

Install my-project with npm

```bash
  npm install
```

<!-- Run Locally -->

### :running: Run Locally

Clone the project

```bash
  git clone git@github.com:marksist300/chattyApp.git
```

Go to the client directory

```bash
  cd client
  npm install
  npm run dev
```

Go to the server directory

```bash
  cd server
  npm install
  node server.js
```
