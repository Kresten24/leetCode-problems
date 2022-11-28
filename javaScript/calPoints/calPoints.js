/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let res = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      res.push(Number(res[res.length - 1]) + Number(res[res.length - 2]));
    } else if (operations[i] === "D") {
      res.push(Number(res[res.length - 1]) * 2);
    } else if (operations[i] === "C") {
      res.pop();
    } else {
      res.push(Number(operations[i]));
    }
  }
  return res.reduce((acc, curr) => acc + curr, 0);
};
