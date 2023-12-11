
export class TypeCalcOperation {
  static number = 'number';
  static C = 'C';
  static delete = 'delete';
  static percent = 'percent';
  static constant = 'constant';
  static sen = 'sen';
  static cos = 'cos';
  static tan = 'tan';
  static square = 'square';
  static power = 'power_2';
  static powerY = 'power_y';
  static division = 'division';
  static multiplication = 'multiplication';
  static subtraction = 'subtraction';
  static addition = 'addition';
  static lg = 'lg';
  static ln = 'ln';
  static point = 'point';
  static equal = 'equal';
}

export class Power {
  static square = 2;
  static cube = 3;

  constructor(number, power = 2) {
    this.number = number;
    this.power = power;
  }

  get power2() {
    return Math.pow(this.number, Power.square);
  }

  get power3() {
    return Math.pow(this.number, Power.cube);
  }

  get result() {
    return Math.pow(this.number, this.power);
  }
}


export class Operation {
  /**
   * 
   * @param {TypeCalcOperation} type 
   * @param {number[]} values 
   */
  constructor(type, values) {
    this.type = type;
    this.values = values;
  }

  /**
   * 
   * @returns {number}
   */
  result() {
    this.#validateLength();

    if (this.type === TypeCalcOperation.addition) {
      return this.#addition();
    }

    if (this.type === TypeCalcOperation.subtraction) {
      return this.#subtraction();
    }

    if (this.type === TypeCalcOperation.multiplication) {
      return this.#multiplication();
    }

    if (this.type === TypeCalcOperation.disivion) {
      return this.#division();
    }
  }

  #validateLength() {
    if (this.values.length < 2) {
      throw new Error('Insufficient values');
    }
  }

  #addition() {
    return this.values.reduce((acc, value) => acc + value);
  }

  #subtraction() {
    return this.values.reduce((acc, value) => acc - value);
  }

  #multiplication() {
    return this.values.reduce((acc, value) => acc * value);
  }

  #division() {
    if (this.values.includes(0)) {
      throw new Error('Division by zero');
    }

    return this.values.reduce((acc, value) => acc / value);
  }
}