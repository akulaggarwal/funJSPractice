function path_finder(x, y, table) {
  storage = [x];

  for (let i = 0; i < storage.length; i++) {
    const val = storage[i];
    console.log(val)
    if (val === y) {
      // debugger;
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

path_finder('A', 'K', table)
