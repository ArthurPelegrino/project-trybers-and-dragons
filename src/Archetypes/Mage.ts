import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType = 'mana';
  private static _createdArchetypeInstances = 0;
  constructor(name: string) {
    super(name);
    Mage._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType as EnergyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }
}