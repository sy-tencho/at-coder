function* colors() {
  yield 'red';
  yield 'yellow';
  yield 'blue';
}

const gen = colors();
gen.next();
gen.next();
gen.next();
gen.next();

const myColors = []
for(let color of colors()) {
  myColors.push(color);
}

console.log(myColors)

const testingTeam = {
  lead: 'Night',
  tester: 'David',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'development',
  lead: 'Jonathan',
  manager: 'Kent',
  engineer: 'Bob',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
}

const names = []

for(let name of engineeringTeam) {
  names.push(name);
}

console.log(names)