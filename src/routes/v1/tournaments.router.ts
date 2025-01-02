// External Dependencies
import { Router } from 'express';
import {
  createTournament,
  updateTournament,
  getAllTournaments,
  getOneTournament,
  removeTournament,
} from '../../controllers/tournament';

// TODO: move handlers to controller file
// TODO: TASK-01 FIX OPTIONAL VARIABLES
// Global Config
const tournamentRouter = Router();
export default tournamentRouter;

// GET /tournament/
tournamentRouter.get('/', getAllTournaments);
// GET /tournament/:id
tournamentRouter.get('/:id', getOneTournament);
// POST /tournament/
tournamentRouter.post('/', createTournament);
// PUT /tournament/:id
tournamentRouter.put('/:id', updateTournament);
// DELETE /tournament/:id
tournamentRouter.delete('/:id', removeTournament);
