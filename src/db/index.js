import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getPlanets() {
  const [rows] = await pool.query("SELECT * FROM planets");
  return rows;
}

export async function getPlanetById(id) {
  const [rows] = await pool.query("SELECT * FROM planets WHERE planet_id = ?", [id]);
  return rows[0];
}

const planets = await getPlanets();
console.log(planets);
