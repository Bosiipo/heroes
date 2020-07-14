import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Planet } from './planet.model';
import { Species } from './species.model';

@model()
export class Character extends Entity {

  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @belongsTo(() => Character, {keyTo: 'id'})
  friendId: number;

  @belongsTo(() => Planet, {keyTo: 'id'})
  planetId: number;

  @belongsTo(() => Species, {keyTo: 'id'})
  speciesId: number;

  constructor(data?: Partial<Character>) {
    super(data);
  }
}
