// Copy in the browser's console

class Traditional {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

class Binded {
  constructor(name) {
    this.name = name;
    this.greet = this.greet.bind(this);
  }
  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

class Arrow {
  constructor(name) {
    this.name = name;
  }
  greet = () => {
    console.log(`Hi, my name is ${this.name}`);
  };
}

// greet is created in the constructor function's prototype
const traditional1 = new Traditional("Peter");

// greet is created in the constructor function's prototype and in the instance
const binded1 = new Binded("Dark");

// greet is created in the instance
const arrow1 = new Arrow();

traditional1;
binded1;
arrow1;
