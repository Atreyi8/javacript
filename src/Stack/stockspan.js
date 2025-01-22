//The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and we need to calculate span of stock’s price for all n days.
//The span Si of the stock’s price on a given day i is defined as the maximum number of consecutive days just before the given day,
//for which the price of the stock on the current day is less than or equal to its price on the given day.
//For example, if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85}, then the span values for corresponding 7 days are {1, 1, 1, 2, 1, 4, 6}

// So for 100 - its the 1 day no element less so 1
// 80 - 100>80 , so only 80 - 1
// for 60 , 80>60 , so only 60 -1
// for 70 , 60 is less than 70 , but 80 is larger - so 2 days 60 and 70 -2
// for 60 , 70>60 , so 1 day 60 -1
// for 75 , 60,70,60 are less and than 80 is larger - so 4 (60,70,60,75)
// for 85 , 75,60,70,60,80 are less than 100 is larger - so 6 (80,60,70,75,85)

// so hence we are looking for greatest element in left , and stopping there
// hence as we encounter greatest element , we have to check days - so for 85(index -6), greatest element is 100(index-0), so number of elements all small span is - i-0 = 6-0 =6
// so its a ngl problem with index
// -1,0,1,1,3,1,0

const stockSpan = (inputarr) => {
  let largestElementEncounterArr = [];
  let stack = [];

  for (let i = 0; i < inputarr.length; i++) {
    if (stack.length === 0) {
      largestElementEncounterArr.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1].ele > inputarr[i]) {
      console.log("@@", stack[stack.length - 1].ele, stack);
      largestElementEncounterArr.push(stack[stack.length - 1].index);
    } else if (stack.length > 0 && stack[stack.length - 1].ele <= inputarr[i]) {
      while (stack.length > 0 && stack[stack.length - 1].ele <= inputarr[i]) {
        stack.pop();
        if (stack.length === 0) {
          largestElementEncounterArr.push(-1);
        } else if (
          stack.length > 0 &&
          stack[stack.length - 1].ele > inputarr[i]
        ) {
          largestElementEncounterArr.push(stack[stack.length - 1].index);
        }
      }
    }
    stack.push({ ele: inputarr[i], index: i });
    console.log("111", stack);
  }
  console.log(largestElementEncounterArr);
  return largestElementEncounterArr.map((i, index) => index - i);
};

console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]));
