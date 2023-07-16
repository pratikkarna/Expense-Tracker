const expenseForm = document.getElementById('expense-form');
const expenseInput = document.getElementById('expense-input');
const amountInput = document.getElementById('amount-input');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');


let expenses = [];


function addExpense(description, amount) {
   
    const expense = {
        id: Date.now(),
        description,
        amount
    };

    
    expenses.push(expense);

    
    expenseInput.value = '';
    amountInput.value = '';

  
    renderExpenses();
}


function removeExpense(id) {
    
    const index = expenses.findIndex(expense => expense.id === id);

  
    if (index !== -1) {
        expenses.splice(index, 1);
    }

   
    renderExpenses();
}


function renderExpenses() {
   
    expenseList.innerHTML = '';

 
    let total = 0;

   
    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];

        
        const li = document.createElement('li');

       
        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = expense.description;

        const amountSpan = document.createElement('span');
        amountSpan.textContent = '$' + expense.amount;

        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeExpense(expense.id));

   
        li.appendChild(descriptionSpan);
        li.appendChild(amountSpan);
        li.appendChild(removeButton);

       
        expenseList.appendChild(li);

        
        total += Number(expense.amount);
    }

 
    totalAmount.textContent = total.toFixed(2);
}


expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

   
    const description = expenseInput.value;
    const amount = amountInput.value;

    
    if (description && amount) {
        addExpense(description, amount);
    }
});
