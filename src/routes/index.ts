import { Router } from 'express';


// **** Variables **** //

const apiRouter = Router();

// Add UserRouter
apiRouter.use('/', (req,res) => {
  res.send('Hello World 2');
});
// **** Export default **** //

export default apiRouter;
