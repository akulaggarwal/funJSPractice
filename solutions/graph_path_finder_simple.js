function path_finder(x, y, table) {
  let storage = [x];

  for (let val of storage) {
    console.log(val)
    if (val === y) {
      console.log(true);
      return true;
    }

    if (table[val]) {
      for (let node of table[val]) {
        if (storage.indexOf[node] !== -1) {
          // console.log('node:', node)
          storage.push(node);
        }
      }
    }

  }
  console.log(storage, false);
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

path_finder('A', 'P', table)
