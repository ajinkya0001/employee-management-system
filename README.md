# 🚀 Employee Management System

A production-style Full Stack Employee Management System built using **React**, **Spring Boot**, and **PostgreSQL**, containerized with **Docker**, deployed on **Amazon ECS (Fargate)**, with **Amazon RDS** as the managed database and automated using **Jenkins CI/CD**.

![Java](https://img.shields.io/badge/Java-21-orange)
![Spring Boot](https://img.shields.io/badge/SpringBoot-4.x-brightgreen)
![React](https://img.shields.io/badge/React-Frontend-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Docker](https://img.shields.io/badge/Docker-Container-blue)
![AWS ECS](https://img.shields.io/badge/AWS-ECS-orange)
![Jenkins](https://img.shields.io/badge/Jenkins-CI/CD-red)
![License](https://img.shields.io/badge/License-MIT-green)

---

# 📌 Project Overview

The Employee Management System is a full-stack CRUD application that allows users to manage employee records efficiently.

This project demonstrates an **enterprise-style DevOps deployment pipeline**, including:

- Spring Boot REST API
- React Frontend
- PostgreSQL Database
- Docker Containerization
- Amazon Elastic Container Registry (ECR)
- Amazon Elastic Container Service (ECS Fargate)
- Application Load Balancer (ALB)
- Amazon RDS PostgreSQL
- Jenkins CI/CD Pipeline

The objective of this project was to gain practical experience with enterprise application development, cloud deployment, container orchestration, and DevOps automation.

---

# ✨ Features

- ➕ Add Employee
- 📋 View Employees
- ✏️ Update Employee
- ❌ Delete Employee
- 🔍 Search Employees
- 🌐 REST API
- 🐳 Dockerized Backend
- ☁️ AWS Cloud Deployment
- 🚀 Jenkins CI/CD Pipeline
- 📦 Container Deployment using Amazon ECS
- 🗄️ PostgreSQL Database hosted on Amazon RDS

---

# 🛠️ Tech Stack

## Frontend

- React
- JavaScript
- HTML5
- CSS3
- Bootstrap
- Axios

---

## Backend

- Java 21
- Spring Boot
- Spring Data JPA
- REST API
- Maven

---

## Database

- PostgreSQL
- Amazon RDS

---

## DevOps

- Docker
- Docker Compose
- Jenkins
- Git
- GitHub
- AWS CLI

---

## AWS Services

- Amazon ECS (Fargate)
- Amazon ECR
- Amazon RDS
- Application Load Balancer
- CloudWatch
- IAM

---

# 🏗️ System Architecture

```text
                    Developer
                         │
                    Git Push
                         │
                         ▼
                     GitHub Repository
                         │
                         ▼
                 Jenkins CI/CD Pipeline
                         │
         ┌───────────────┴────────────────┐
         │                                │
         ▼                                ▼
 Build Spring Boot                  Build React
         │
         ▼
 Build Docker Image
         │
         ▼
 Push Image to Amazon ECR
         │
         ▼
 Amazon ECS Service (Fargate)
         │
         ▼
 Application Load Balancer
         │
         ▼
 Spring Boot REST API
         │
         ▼
 Amazon RDS PostgreSQL

```

---

# 📂 Project Structure

```
employee-management-system/

│
├── employee-management-backend/
│   ├── src/
│   ├── Dockerfile
│   ├── pom.xml
│   └── mvnw
│
├── employee-management-ui/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
│
├── ecs/
│   └── task-definition.json
│
├── Jenkinsfile
│
├── docker-compose.yml
│
├── README.md
│
└── .gitignore
```

---

# 🚀 REST API Endpoints

| Method | Endpoint | Description |
|----------|----------------------|----------------|
| GET | /employees | Get All Employees |
| POST | /employees | Add Employee |
| PUT | /employees/{id} | Update Employee |
| DELETE | /employees/{id} | Delete Employee |

---

# 🐳 Docker

## Build Backend

```bash
docker build -t employee-backend .
```

Run Container

```bash
docker run -p 8080:8080 employee-backend
```

Using Docker Compose

```bash
docker-compose up -d
```

---

# ☁️ AWS Deployment

## Backend

- Spring Boot Docker Container
- Amazon ECS (Fargate)
- Application Load Balancer

---

## Container Registry

Amazon Elastic Container Registry (ECR)

---

## Database

Amazon RDS PostgreSQL

---

## Monitoring

Amazon CloudWatch Logs

---

# ⚙️ Local Setup

## Clone Repository

```bash
git clone https://github.com/ajinkya0001/employee-management-system.git

cd employee-management-system
```

---

## Backend

```bash
cd employee-management-backend

./mvnw clean install

./mvnw spring-boot:run
```

---

## Frontend

```bash
cd employee-management-ui

npm install

npm run dev
```

---

# 🚀 CI/CD Pipeline

The project uses Jenkins Pipeline for automated deployment.

Pipeline Flow

```text
GitHub Push

↓

Checkout Source

↓

Build Spring Boot

↓

Run Tests

↓

Build Docker Image

↓

Push Image to Amazon ECR

↓

Register ECS Task Definition

↓

Deploy to Amazon ECS

↓

Application Load Balancer

↓

Production
```

---

# 📸 Screenshots

Add screenshots here.

Example

<img width="1919" height="1077" alt="image" src="https://github.com/user-attachments/assets/32686fca-b7db-48a3-959b-6419e41f283f" />

# 🎯 Learning Outcomes

This project helped me gain practical experience with:

- Spring Boot REST APIs
- React Development
- PostgreSQL Integration
- Spring Data JPA
- Docker
- Docker Compose
- Amazon ECS
- Amazon ECR
- Amazon RDS
- Application Load Balancer
- CloudWatch Logs
- Jenkins CI/CD
- Git & GitHub
- AWS IAM
- Containerized Deployments

---

# 🔮 Future Enhancements

- JWT Authentication
- Spring Security
- Role-Based Access Control
- Pagination
- Sorting
- Search Filters
- Unit Testing
- Integration Testing
- Terraform Infrastructure
- Kubernetes Deployment (Amazon EKS)
- SonarQube Integration
- Prometheus & Grafana Monitoring

---

# 👨‍💻 Author

**Ajinkya Jadkar**

📧 Email

ajinkyajadkar01@gmail.com

🔗 LinkedIn

https://www.linkedin.com/in/ajinkya-jadkar-6b4b6b229/

🐙 GitHub

https://github.com/ajinkya0001

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

It motivates me to continue building production-ready cloud and DevOps projects.
