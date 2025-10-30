import express from "express";
import { getPlanets, getPlanetById, createPlanet} from "../db/index.js";

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

router.post('/', async (req, res, next) => {
  try {
    const { name, discovered_year, discovered_by, has_moons } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Planet name is required' });
    }

    const newPlanet = await createPlanet({ name, discovered_year, discovered_by, has_moons });
    res.status(201).json(newPlanet);
  } catch (error) {
    console.error('Error creating planet:', error);
    next(error);
  }
});


export default router;
