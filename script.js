const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let input = localStorage.getItem("calcInput") || "";
display.textContent = input || "0";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("clear")) {
      input = "";
    } else if (button.classList.contains("delete")) {
      input = input.slice(0, -1);
    } else if (button.classList.contains("equals")) {
      input = calculate(input);
    } else {
      input += value;
    }

    display.textContent = input || "0";
    localStorage.setItem("calcInput", input); // localdtorage
  });
});

function calculate(expression) {
  try {
    return eval(expression);
  } catch {
    return "Неправильный ввод";
  }
}
