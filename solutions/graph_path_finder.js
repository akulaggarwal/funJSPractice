function pathFinder(x, y, table) {
  let storage = [x];

  for (let v of storage) {
    const currentNode = v[v.length - 1]
    if (currentNode === y) {
      return v;
    }

  const children = table[currentNode];
    if (children) {
      for (let node of children) {
        if (v.indexOf(node) !== -1) {
          continue;
        }
        const path = v + node;
        // debugger;
        storage.push(path);
      }
    }
  }
  return false;
}

const table = {
  A: ['B', 'C'],
  B: ['H'],
  C: ['I', 'D'],
  D: ['F', 'E'],
  E: ['B'],
  F: null,
  G: ['K'],
  H: null,
  I: ['K'],
  K: null,
  P: ['G']
}

console.log(pathFinder('A', 'P', table));
