// Inlämning 
// Arrayer för inkomster och utgifter
const incomes = [];
const expenses = [];

// Hämta HTML-element
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const transactionList = document.getElementById("transactionList");
const balanceDisplay = document.getElementById("balance");

// Funktion för att skapa och lägga till transaktion
function addTransaction(type) {
  const description = descInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!description || isNaN(amount)) {
    alert("Fyll i både beskrivning och ett giltigt belopp.");
    return;
  }

  const transaction = { description, amount, type };

  if (type === "income") {
    incomes.push(transaction);
    addToList(incomeList, transaction);
  } else {
    expenses.push(transaction);
    addToList(expenseList, transaction);
  }

  updateBalance();
  clearInputs();
}

// Funktion för att lägga till transaktion i en lista
function addToList(list, transaction) {
  const li = document.createElement("li");

  const label = transaction.type === "income" ? "Inkomst" : "Utgift";
  const text = `${transaction.description} - ${transaction.amount} kr (${label})`;

  li.textContent = text;
  li.classList.add(transaction.type);
  list.appendChild(li);
}

// Funktion för att uppdatera saldot
function updateBalance() {
  const incomeTotal = incomes.reduce((sum, item) => sum + item.amount, 0);
  const expenseTotal = expenses.reduce((sum, item) => sum + item.amount, 0);
  const total = incomeTotal - expenseTotal;
  balanceDisplay.textContent = total;
}

// Funktion för att rensa input-fält
function clearInputs() {
  descInput.value = "";
  amountInput.value = "";
}

// Event-lyssnare
incomeBtn.addEventListener("click", () => addTransaction("income"));
expenseBtn.addEventListener("click", () => addTransaction("expense"));