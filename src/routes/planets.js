import express from "express";
import { getPlanets, getPlanetById } from "../db/index.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const planets = await getPlanets();
    res.json(planets);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const planet = await getPlanetById(id);

    if (!planet) {
      return res.status(404).json({ error: 'Planet not found' });
    }

    res.json(planet);
  } catch (error) {
    console.error('Error fetching planet by ID:', error); // 👈 Add this
    next(error);
  }
});


export default router;
