// External dependencies
import { ObjectId } from 'mongodb';
// Class Implementation
export default class Tournament {
  constructor(
    public name: string,
    public id?: ObjectId,
  ) {}
}
