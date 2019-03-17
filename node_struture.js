class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator] () {
    yield this.content;
    for(let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('agree', []),
  new Comment('disagree', [],),
  new Comment('so-so', []),
];

const tree = new Comment('awsome!', children);

const values = []

for (let value of tree) {
  values.push(value);
}

console.log(values)