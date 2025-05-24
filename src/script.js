//Slutgiltig inlämning
// 1. Skapa arrayer för inkomster och utgifter
let incomes = [];
let expenses = [];

// 2. Hämta HTML-element
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const transactionList = document.getElementById("transactionList");
const balanceDisplay = document.getElementById("balance");

// 3. Funktion för att lägga till transaktion
function addTransaction(type) {
  const description = descInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (description === "" || isNaN(amount)) {
    alert("Fyll i både beskrivning och ett giltigt belopp.");
    return;
  }

  const transaction = { description, amount, type };

  if (type === "income") {
    incomes.push(transaction);
    renderTransaction(transaction, incomeList);
  } else {
    expenses.push(transaction);
    renderTransaction(transaction, expenseList);
  }

  renderTransaction(transaction, transactionList);
  updateBalance();

  // Töm input-fälten
  descInput.value = "";
  amountInput.value = "";
}

// 4. Visa transaktion i rätt lista
function renderTransaction(transaction, listElement) {
  const li = document.createElement("li");
  li.textContent = `${transaction.description}: ${transaction.amount} kr`;
  li.classList.add(transaction.type);
  listElement.appendChild(li);
}

// 5. Räkna ut och visa saldo
function updateBalance() {
  const totalIncome = incomes.reduce((sum, item) => sum + item.amount, 0);
  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);
  const balance = totalIncome - totalExpense;
  balanceDisplay.textContent = balance;
}

// 6. Event listeners
incomeBtn.addEventListener("click", () => addTransaction("income"));
expenseBtn.addEventListener("click", () => addTransaction("expense"));