function Expense(id, amount, category, description, done) {
  this.id = id;
  this.amount = amount;
  this.category = category;
  this.description = description;
  this.done = done;
}

function createExpenseTracker(username, budget) {
  let user = {
    username: username,
    budget: budget,
  };

  let expenses = new Array();

  return {
    addExpense: function (id, amount, category, description, done = false) {
      if (user.budget > amount) {
        expenses.push(new Expense(id, amount, category, description, done));
        user.budget -= amount;
      }
    },
    removeExpense: function (id) {
      const index = expenses.find((item) => item.id === id);
      if (index !== -1) expenses.splice(index, 1);
    },
    updateExpense: function (id, newExpense) {
      expenses.splice(id, 1, newExpense);
    },
    getDoneExpense: () => expenses.filter(({ done }) => done === true),
    getExpenseByCategory: () =>
      Object.groupBy(expenses, ({ category }) => category),
    getHighestExpense: () =>
      expenses.map(({ amount }) => amount).toSorted((a, b) => b - a)[0],
    getLowestExpense: () =>
      expenses.map(({ amount }) => amount).toSorted((a, b) => a - b)[0],
    getExpenses: () => expenses,
    getUser: () => user,
    updateUser: (key, value) => (user[key] = value),
  };
}

const expenseTracker = createExpenseTracker("kolade", 100000);
expenseTracker.addExpense(1, 20000, "food", "two dericas of rice");
expenseTracker.addExpense(2, 5000, "data and airtime", "20GB for 7days");
expenseTracker.addExpense(3, 4700, "food", "thefatherchow hunger pack");
console.log("Getting expenses:", expenseTracker.getExpenses());
expenseTracker.updateExpense(
  1,
  new Expense(2, 5000, "data and airtime", "7GB weekly", true),
);
console.log("Getting updated expenses:", expenseTracker.getExpenses());
expenseTracker.removeExpense(2);
console.log("Getting expenses after removal:", expenseTracker.getExpenses());
console.log("Total done expenses:", expenseTracker.getDoneExpense());
console.log("Expense by category:", expenseTracker.getExpenseByCategory());
console.log(
  "Expense with the greatest amount is:",
  expenseTracker.getHighestExpense(),
);
console.log(expenseTracker.updateUser("username", "anonymous"));
console.log(expenseTracker.getUser());
