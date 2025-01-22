// sort array via recursion
//https://www.youtube.com/watch?v=AZ4jEY_JAVc&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=6

const inserLastElement = (list, temp) => {
  console.log("####", list, temp);
  if (list.length === 0 || list[list.length - 1] <= temp) {
    list.push(temp);
    return list;
  }

  let anotherTemp = list[list.length - 1];
  list.pop();
  inserLastElement(list, temp);
  list.push(anotherTemp);
};

const sortArray = (arr) => {
  // base condition
  if (arr.length === 1) {
    console.log("here____");
    return;
  }

  let temp = arr[arr.length - 1];
  arr.pop();
  console.log("1", arr);
  sortArray(arr);

  inserLastElement(arr, temp);

  return arr;
};
console.log(sortArray([2, 3, 7, 6, 4, 5, 9]));
