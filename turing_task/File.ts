import inquirer from "inquirer";
// var calPoints = function (ops: any) {
//   var result = null;

//   return result;
// };

var calPoints = function (ops: string[]) {
  let result: number[] = [];
  for (let i = 0; i < ops.length; i++) {
    if (Number(ops[i])) {
      result.push(Number(ops[i]));
    } else if (ops[i] === "C") {
      result.pop();
    } else if (ops[i] === "D") {
      result[result.length] = result[result.length - 1] * 2;
    } else if (ops[i] === "+") {
      let lastIndex = result.length;
      let a = result[lastIndex - 1];
      let b = result[lastIndex - 2];
      result.push(a + b);
    }
  }

  let finalResult: number;
  if (result.length > 0) {
    finalResult = result.reduce((sum, a) => sum + a);
  } else {
    finalResult = 0;
  }
  return finalResult;
};

console.log(calPoints(["1", "C"]));

console.log(calPoints(["5", "2", "C", "D", "+"]));

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
