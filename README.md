# 🚀 Employee Management System

A Full-Stack Employee Management System built using **React**, **Spring Boot**, and **PostgreSQL**, containerized with **Docker**, and deployed on **AWS EC2** with **Amazon RDS** as the database and **Amazon S3** for static website hosting.

![Java](https://img.shields.io/badge/Java-21-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen)
![React](https://img.shields.io/badge/React-19-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED)
![AWS](https://img.shields.io/badge/AWS-EC2%20%7C%20RDS%20%7C%20S3-FF9900)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 Project Overview

The Employee Management System is a full-stack web application that allows users to manage employee records efficiently. It supports complete CRUD operations and demonstrates a production-style deployment using Docker and AWS cloud services.

This project was built to gain hands-on experience with enterprise application development, REST APIs, containerization, cloud deployment, and modern frontend technologies.

---

## ✨ Features

- ➕ Add New Employee
- 📋 View All Employees
- 🔍 Search Employee
- ✏️ Update Employee Details
- ❌ Delete Employee
- 📱 Responsive User Interface
- 🔗 RESTful API Integration
- 🐳 Dockerized Backend
- ☁️ AWS Cloud Deployment

---

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript
- HTML5
- CSS3
- Axios
- Bootstrap

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- REST API
- Maven

### Database
- PostgreSQL
- Amazon RDS

### DevOps & Cloud
- Docker
- Docker Compose
- AWS EC2
- Amazon S3 (Static Website Hosting)
- Git & GitHub

---

# 🏗️ System Architecture

```
                 React Frontend
                        │
                        ▼
                Spring Boot REST API
                        │
                        ▼
                 PostgreSQL (AWS RDS)

Frontend Hosted on Amazon S3
Backend Hosted on AWS EC2
```

---

# 📂 Project Structure

```
employee-management-system/
│
├── backend/
│   ├── src/
│   ├── Dockerfile
│   ├── pom.xml
│   └── docker-compose.yml
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
├── README.md
└── .gitignore
```

---

# 🚀 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /employees | Get All Employees |
| GET | /employees/{id} | Get Employee By ID |
| POST | /employees | Add Employee |
| PUT | /employees/{id} | Update Employee |
| DELETE | /employees/{id} | Delete Employee |

---

# 🐳 Docker Setup

## Build Docker Image

```bash
docker build -t employee-management-system .
```

## Run Container

```bash
docker run -d -p 8080:8080 employee-management-system
```

Or using Docker Compose

```bash
docker-compose up -d
```

---

# ☁️ AWS Deployment

## Backend

- Hosted on AWS EC2
- Spring Boot application running inside Docker
- Reverse proxy (optional) using Nginx

## Database

- PostgreSQL hosted on Amazon RDS

## Frontend

- React production build hosted on Amazon S3 Static Website Hosting

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/ajinkya0001/employee-management-system.git
```

```bash
cd employee-management-system
```

---

## Backend Setup

```bash
cd backend

mvn clean install

mvn spring-boot:run
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 📸 Screenshots

> Add screenshots here after uploading them.

Example:

```
screenshots/
    home.png
    add-employee.png
    update-employee.png
```

---

# 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Spring Boot REST API Development
- React Frontend Development
- PostgreSQL Database Integration
- Spring Data JPA
- Docker Containerization
- AWS EC2 Deployment
- Amazon RDS Configuration
- Amazon S3 Static Website Hosting
- REST API Testing using Postman
- Git & GitHub Workflow

---

# 🔮 Future Enhancements

- JWT Authentication
- Spring Security
- Role-Based Access Control
- Pagination & Sorting
- Search & Filtering
- Unit Testing
- CI/CD using GitHub Actions
- Monitoring with AWS CloudWatch

---

# 👨‍💻 Author

### Ajinkya Jadkar

📧 Email: ajinkyajadkar01@gmail.com

💼 LinkedIn:
https://www.linkedin.com/in/ajinkya-jadkar-6b4b6b229/

🐙 GitHub:
https://github.com/ajinkya0001

---

## ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub!

It helps others discover the project and motivates me to build more.
