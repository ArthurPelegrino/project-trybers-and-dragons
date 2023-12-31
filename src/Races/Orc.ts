import Race from './Race';

class Orc extends Race {
  private static _numberOfIntances = 0;
  private _maxLifePoints = 74;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._numberOfIntances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._numberOfIntances;
  }
}

export default Orc;