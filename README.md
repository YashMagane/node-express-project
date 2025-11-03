# 🪐 Planets & Moons API

A simple RESTful API built with **Node.js**, **Express**, and **MySQL** that lets you explore planets, their discovery details, and their moons.  
This project demonstrates backend fundamentals like routing, database queries, and CRUD operations — and is deployable on **Railway**.

---

## 🚀 Features
- Get all planets  
- Get a single planet by ID  
- Create new planets  
- (Optional) Manage moons linked to planets  
- Built with a MySQL connection pool using `mysql2`  
- Environment variable support with `dotenv`  

---

## 🧩 Technologies Used
- **Node.js**
- **Express**
- **MySQL**
- **mysql2**
- **dotenv**
- **CORS**

---

## ⚙️ Setup Instructions

### 1️ Clone the repository
git clone https://github.com/YOUR_USERNAME/planets-api.git
cd planets-api

### 2 Install dependencies
npm install

### 3 Create a .env file and add these
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DATABASE=planets_db
PORT=3000

### 4 Create the database
CREATE DATABASE IF NOT EXISTS planets_db;
USE planets_db;

CREATE TABLE IF NOT EXISTS planets (
    planet_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    discovered_year INT,
    discovered_by VARCHAR(100),
    has_moons BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS moons (
    moon_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    discovered_year INT,
    discovered_by VARCHAR(100),
    planet_id INT,
    FOREIGN KEY (planet_id) REFERENCES planets(planet_id) ON DELETE CASCADE
);

### 5 Run Server
npm run dev


---

## 📡 API Endpoints

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| GET    | `/planets`     | Get all planets      |
| GET    | `/planets/:id` | Get a planet by ID   |
| POST   | `/planets`     | Add a new planet     |

**Example POST body:**
```json
{
  "name": "Pluto",
  "discovered_year": 1930,
  "discovered_by": "Clyde Tombaugh",
  "has_moons": true
}


