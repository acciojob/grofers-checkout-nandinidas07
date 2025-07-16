// Create the "Get Total Price" button
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

  
  if (table.lastElementChild && table.lastElementChild.className === "total") {
    table.removeChild(table.lastElementChild);
  }

  const totalRow = document.createElement("tr");
  totalRow.className = "total";
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; 
  totalCell.textContent = total; 

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);