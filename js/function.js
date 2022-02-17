
//for function

function getInputValue(idInput) {
    const input = document.getElementById(idInput);
    const inputAmountText = input.value;
    const inputAmount = parseFloat(inputAmountText);

    return inputAmount;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    //for income
    const incomeAmount = getInputValue('income-input');

    //for food
    const foodAmount = getInputValue('food-input');

    //for rent
    const rentAmount = getInputValue('rent-input');

    //for clothes
    const clothesAmount = getInputValue('clothes-input');

    //total expenses
    const totalExpensesAmount = foodAmount + rentAmount + clothesAmount;
    // console.log(totalExpensesAmount);

    //update total expenses
    const totalExpenses = document.getElementById('total-expense');
    totalExpenses.innerText = totalExpensesAmount;
    //update balance
    const updateBalance = document.getElementById('balance');
    const updateTotalBalance = incomeAmount - totalExpensesAmount;
    updateBalance.innerText = updateTotalBalance;
    // console.log(totalBalance);

    //for 20% Saving Amount
    document.getElementById('save-button').addEventListener('click', function () {
        const savePercentageAmount = getInputValue('save-input');


        //calculate savings
        const savingAmount = document.getElementById('saving-amount');
        const updatSavingAmount = (savePercentageAmount * incomeAmount) / 100;
        // console.log(updatSavingAmount);
        savingAmount.innerText = updatSavingAmount;

        //Remaining Balance
        const remainingBalance = document.getElementById('remaining-balance');
        const updateremainingBalance = updateTotalBalance - updatSavingAmount;
        remainingBalance.innerText = updateremainingBalance;

    });
});
