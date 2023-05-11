import Race from './Race';

class Dwarf extends Race {
  private static _numberOfIntances = 0;
  private _maxLifePoints = 80;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._numberOfIntances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._numberOfIntances;
  }
}

export default Dwarf;