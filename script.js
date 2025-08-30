const incomeInput = document.getElementById("income");
const expenseInput = document.getElementById("expense");
const remainingBalance = document.getElementById("remainingBalance");

function updateBalance() {
    const income = parseFloat(incomeInput.value) || 0;
    const expense = parseFloat(expenseInput.value) || 0;

    const balance = income - expense;
    remainingBalance.textContent = "$" + balance.toFixed(2);
}

// Calculate on typing
incomeInput.addEventListener("input", updateBalance);
expenseInput.addEventListener("input", updateBalance);

// Also calculate when form submitted
document.getElementById("budgetForm").addEventListener("submit", function(e) {
    e.preventDefault();
    updateBalance();
});