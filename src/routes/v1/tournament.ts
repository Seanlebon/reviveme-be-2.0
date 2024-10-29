import { Router } from 'express';
import {viewTournament} from '../../controllers/Tournament';

// **** Variables **** //

const tournamentRouter = Router();
// Add UserRouter
tournamentRouter.get('/', viewTournament);

// **** Export default **** //

export default tournamentRouter;
