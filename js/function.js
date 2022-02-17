
//for calculate income
//for income
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);
    // console.log(incomeAmount);

    //for food
    const foodInput = document.getElementById('food-input');
    const foodAmountText = foodInput.value;
    const foodAmount = parseFloat(foodAmountText);
    // console.log(foodAmount);

    //for rent
    const rentInput = document.getElementById('rent-input');
    const rentAmountText = rentInput.value;
    const rentAmount = parseFloat(rentAmountText);
    // console.log(rentAmount);

    //for clothes
    const clothesInput = document.getElementById('clothes-input');
    const clothesAmountText = clothesInput.value;
    const clothesAmount = parseFloat(clothesAmountText);
    // console.log(clothesAmount);

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
        const savePercentageInput = document.getElementById('save-input');
        const savePercentageInputText = savePercentageInput.value;
        const savePercentageAmount = parseFloat(savePercentageInputText);
        // console.log(savePercentageAmount);
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
