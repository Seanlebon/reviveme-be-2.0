import { Router } from 'express';
import tournamentRouter from './v1/tournaments.router';

// **** Variables **** //

const apiRouter = Router();

apiRouter.use('/tournament', tournamentRouter);

// Add UserRouter
apiRouter.use('/', (req, res) => {
  res.send('Hello World 2');
});
// **** Export default **** //
export default apiRouter;
