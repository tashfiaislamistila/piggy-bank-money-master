/* const calculateBtn = document.getElementById('calculate-button')
const saveBtn = document.getElementById('save-button')
const totalExpense = document.getElementById('total-expense')
const balance = document.getElementById('balance')
const savingAmount = document.getElementById('saving-amount')
const remainingBalance = document.getElementById('remaining-balance')
 */

//for calculate income
//for income
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);
    // console.log(incomeAmount);

    //for food
    const foodExpenses = document.getElementById('food-input');
    const foodAmountText = foodExpenses.value;
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
    const totalExpensesText = foodAmount + rentAmount + clothesAmount;
    const totalExpenses = parseFloat(totalExpensesText);
    console.log('totalExpenses', totalExpenses);

    //update total expenses



});