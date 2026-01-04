const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// --- DUMMY DATA ---

const kpis = {
  totalBalance: 24500.50,
  monthlyIncome: 8200.00,
  monthlyExpenses: 3450.00,
  savings: 4750.00
};

const revenueData = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
  { name: 'Jul', revenue: 3490, expenses: 4300 },
];

const transactions = [
  { id: 1, type: 'Credit', category: 'Salary', amount: 5000, date: '2024-01-15' },
  { id: 2, type: 'Debit', category: 'Groceries', amount: 150, date: '2024-01-16' },
  { id: 3, type: 'Debit', category: 'Rent', amount: 1200, date: '2024-01-01' },
  { id: 4, type: 'Credit', category: 'Freelance', amount: 800, date: '2024-01-20' },
  { id: 5, type: 'Debit', category: 'Utilities', amount: 200, date: '2024-01-18' },
];

// --- API ROUTES ---

// Get Key Performance Indicators
app.get('/api/kpis', (req, res) => {
  res.json(kpis);
});

// Get Chart Data
app.get('/api/revenue', (req, res) => {
  res.json(revenueData);
});

// Get Recent Transactions
app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});