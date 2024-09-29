const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/RegisterUser');
const { listUser } = require('../controllers/ListUser');
const { loginUser } = require('../controllers/LoginUser');
const { deleteUser } = require('../controllers/DeleteUser');
const { updateUser } = require('../controllers/UpdateUser');
const { logoutUser } = require('../controllers/LogoutUser');
const { createIncome, listIncomes, updateIncome, deleteIncome } = require('../controllers/IncomesController');

const { createTransaction, listTransactions, deleteTransaction } = require('../controllers/CreateTransaction');
const { createBudget, listBudgets, updateBudget, deleteBudget } = require('../controllers/CreateBudget');
const { createRecurringExpense, listRecurringExpenses, updateRecurringExpense, deleteRecurringExpense } = require('../controllers/CreateExpenses');

// User routes
router.post('/register', registerUser);
router.get('/list', listUser);
router.post('/login', loginUser);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', updateUser);
router.get('/logout/:id', logoutUser);

// Transaction routes
router.post('/transactions', createTransaction);
router.get('/transactions/:userId', listTransactions);
router.delete('/transactions/:id', deleteTransaction);

// Budget routes
router.post('/budgets', createBudget);
router.get('/budgets/:userId', listBudgets);
router.put('/budgets/:id', updateBudget);
router.delete('/budgets/:id', deleteBudget);

// Recurring Expense routes
router.post('/recurring-expenses', createRecurringExpense);
router.get('/recurring-expenses/:userId', listRecurringExpenses);
router.put('/recurring-expenses/:id', updateRecurringExpense);
router.delete('/recurring-expenses/:id', deleteRecurringExpense);

// Incomes
router.post('/income', createIncome);
router.get('/income/:userId', listIncomes);
router.put('/income/:id', updateIncome);
router.delete('/income/:id', deleteIncome);

module.exports = router
