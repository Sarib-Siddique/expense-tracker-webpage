// Get references to HTML elements
const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

// Initialize expenses array from local storage
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Function to display expenses
function displayExpenses() {
  expenseList.innerHTML = "";
  expenses.forEach((expense, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${expense.description}</td>
            <td>${expense.amount}</td>
            <td>
                <button onclick="editExpense(${index})">Edit</button>
                <button onclick="deleteExpense(${index})">Delete</button>
            </td>
        `;
    expenseList.appendChild(row);
  });
}

// Function to add an expense
function addExpense(description, amount) {
  expenses.push({ description, amount });
  localStorage.setItem("expenses", JSON.stringify(expenses));
  displayExpenses();
  expenseForm.reset();
}

// Function to edit an expense
function editExpense(index) {
  const updatedDescription = prompt(
    "Edit Description:",
    expenses[index].description
  );
  const updatedAmount = parseFloat(
    prompt("Edit Amount:", expenses[index].amount)
  );

  if (updatedDescription !== null && !isNaN(updatedAmount)) {
    expenses[index] = {
      description: updatedDescription,
      amount: updatedAmount,
    };
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
  }
}

// Function to delete an expense
function deleteExpense(index) {
  if (confirm("Are you sure you want to delete this expense?")) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
  }
}

// Event listener for the expense form
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const description = e.target.elements.description.value;
  const amount = parseFloat(e.target.elements.amount.value);
  if (description && !isNaN(amount)) {
    addExpense(description, amount);
  } else {
    alert("Please enter valid data.");
  }
});

// Display initial expenses
displayExpenses();

function logout() {
  location.href = "../signup.html";
}
