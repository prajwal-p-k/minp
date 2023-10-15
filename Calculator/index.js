const display = (val) => {
  document.getElementById("result").value += val;
};
const equate = () => {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
};
const clr = () => {
  document.getElementById("result").value = "";
};
