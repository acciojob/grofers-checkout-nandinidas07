// Create the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate and display total price
const getSum = () => {
  // Select all elements with class "prices"
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  // Calculate the sum of all prices
  prices.forEach(price => {
    total += Number(price.textContent);
  });

  // Select the table
  const table = document.querySelector("table");

  // ✅ Remove previous total row if already present (prevents duplicates)
  const existingTotalRow = document.getElementById("totalRow");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row and cell to show the total price
  const totalRow = document.createElement("tr");
  totalRow.id = "totalRow"; // so we can remove it next time
  const totalCell = document.createElement("td");
  
  totalCell.colSpan = 2; // Assuming the table has 2 columns
  totalCell.textContent = Total Price: ${total};

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

// Attach click event to button
getSumBtn.addEventListener("click", getSum);