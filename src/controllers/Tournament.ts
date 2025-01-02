// External Dependencies
import { Request, Response } from 'express';
import { collections } from '../services/database.service';
import Tournament from '../models/tournament';
import { ObjectId } from 'mongodb';
// Global Config

// GET /tournament/
export async function getAllTournaments(_req: Request, res: Response) {
    try {
    const tournaments = (await collections.tournaments
      ?.find({})
      .toArray()) as unknown as Tournament[];

    res.status(200).send(tournaments);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
// GET /tournament/:id
export async function getOneTournament(req: Request, res: Response) {
  const id = req?.params?.id; //TODO: TASK-01

  try {
    const query = { _id: new ObjectId(id) };
    const tournament = (await collections.tournaments?.findOne(query)) as unknown as Tournament; //TODO: TASK-01

    if (tournament) {
      res.status(200).send(tournament);
    }
  } catch (error) {
    res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
  }
}

// POST /tournament/
export async function createTournament(req: Request, res: Response) {
  try {
    const newTournament = req.body as Tournament;
    const result = await collections.tournaments?.insertOne(newTournament); //TODO: TASK-01

    result
      ? res.status(201).send(`Successfully created a new tournament with id ${result.insertedId}`)
      : res.status(500).send('Failed to create a new tournament.');
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}

// PUT /tournament/:id
export async function updateTournament(req: Request, res: Response) {
  const id = req?.params?.id; //TODO: TASK-01

  try {
    const updatedTournament: Tournament = req.body as Tournament;
    const query = { _id: new ObjectId(id) };

    const result = await collections.tournaments?.updateOne(query, { $set: updatedTournament }); //TODO: TASK-01

    result
      ? res.status(200).send(`Successfully updated tournament with id ${id}`)
      : res.status(304).send(`Tournament with id: ${id} not updated`);
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
}


// DELETE /tournament/:id
export async function removeTournament(req: Request, res: Response) {
  const id = req?.params?.id; //TODO: TASK-01

  try {
    const query = { _id: new ObjectId(id) };
    const result = await collections.tournaments?.deleteOne(query);

    if (result && result.deletedCount) {
      res.status(202).send(`Successfully removed tournament with id ${id}`);
    } else if (!result) {
      res.status(400).send(`Failed to remove tournament with id ${id}`);
    } else if (!result.deletedCount) {
      res.status(404).send(`Tournament with id ${id} does not exist`);
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
}