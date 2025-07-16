const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  const table = document.querySelector("table");

  // Remove any previously added total row (we’ll give it the id "ans")
  const existingTotalRow = document.getElementById("ans");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new total row and assign the id "ans"
  const totalRow = document.createElement("tr");
  totalRow.id = "ans"; // id as required by the test
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // assuming 2 columns
  totalCell.textContent = total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);