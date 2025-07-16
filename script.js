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

  const existingTotalRow = document.getElementById("ans");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  
  const totalRow = document.createElement("tr");
  totalRow.id = "ans";
  totalRow.textContent = total; 

  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);