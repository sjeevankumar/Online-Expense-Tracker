const incomeBtn = document.querySelector('.income');
const expenseBtn = document.querySelector('.expense');
const amountInput = document.querySelector('.amount');
const resultIncome = document.querySelector('.result-income');
const resultExpense = document.querySelector('.result-expense');
const resultRemainingMoney = document.querySelector('.result-remaining-money');

let income = 0;
let expense = 0;
let remainingMoney;

incomeBtn.addEventListener('click', () => {
      income = income + parseInt(amountInput.value);
      resultIncome.innerHTML = income;
      remainingMoney = income - expense;
      resultRemainingMoney.innerHTML = remainingMoney;
      amountInput.value = '';
})
expenseBtn.addEventListener('click', () => {
      expense = expense + parseInt(amountInput.value);
      resultExpense.innerHTML = expense;
      remainingMoney = income - expense;
      resultRemainingMoney.innerHTML = remainingMoney;
      amountInput.value = '';
})
