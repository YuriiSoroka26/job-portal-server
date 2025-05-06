# Job Portal Server

This project is a backend application built with **NestJS** and **TypeScript**, serving as the server-side component for a job posting platform. It provides RESTful API endpoints for managing job listings, applications, and related data.

## 🛠️ Technologies Used

* **NestJS** – A progressive Node.js framework for building efficient and scalable server-side applications
* **TypeScript** – Strong typing for modern JavaScript
* **Node.js** – JavaScript runtime environment

## 📁 Project Structure

```
job-portal-server/
├── src/                # Source code
│   ├── controllers/    # Route handlers
│   ├── services/       # Business logic
│   ├── modules/        # Application modules
│   ├── main.ts         # Entry point
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

* Node.js (v14 or higher)
* npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YuriiSoroka26/job-portal-server.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd job-portal-server
   ```

3. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server:**

   ```bash
   npm run start:dev
   ```

   The server will be running at `http://localhost:3001` or your configured port.

## 📌 Notes

* This project is the backend API for a job posting system and is designed to work alongside the Job Portal Client.
* Features such as database integration, authentication, and admin interfaces can be added.
* Contributions and issue reports are welcome!
