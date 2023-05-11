import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType = 'stamina';
  private static _createdArchetypeInstances = 0;
  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType as EnergyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }
}