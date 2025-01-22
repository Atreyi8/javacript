const minimumWindowSubString = (s, t) => {
  let mapObj = new Map();
  for (let i = 0; i < t.length; i++) {
    mapObj.set(t[i], mapObj.get(t[i]) + 1 || 1);
  }

  let i = 0,
    j = 0,
    min = 999;
  let count = mapObj.size;
  console.log(count);

  while (j < s.length) {
    if (mapObj.get(s[j]) !== undefined) {
      mapObj.set(s[j], mapObj.get(s[j]) - 1);
      if (mapObj.get(s[j]) === 0) {
        count = count - 1;
      }
      console.log(j, s[j], count, mapObj.get(s[j]));
    }

    if (count === 0) {
      console.log("###", i, j);
      min = Math.min(min, j - i + 1);
      console.log("1", s.substring(i, j + 1));
    }

    while (count === 0) {
      console.log("@@@@", i, j, s[i], mapObj.get(s[i]), count);
      if (mapObj.get(s[i]) !== undefined) {
        mapObj.set(s[i], mapObj.get(s[i]) + 1);
        if (mapObj.get(s[i]) === 1) {
          count = count + 1;
        }
        i++;
        console.log("****", i, j, s[i], count);
      } else if (mapObj.get(s[i]) === undefined) {
        i++;
      }
      if (count === 0) {
        console.log("2", s.substring(i, j + 1));
        min = Math.min(min, j - i + 1);
      }
    }

    j++;
  }

  return min;
};
console.log("dsd", minimumWindowSubString("TOTMTAPTAT", "TTA"));
