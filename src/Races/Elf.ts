import Race from './Race';

class Elf extends Race {
  private static _numberOfIntances = 0;
  private _maxLifePoints = 99;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._numberOfIntances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._numberOfIntances;
  }
}

export default Elf;