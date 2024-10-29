import { Request, Response} from 'express';

export function viewTournament (req: Request,res: Response) {
  res.send('This is a tournament');
}

