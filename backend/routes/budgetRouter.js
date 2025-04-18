

const express = require('express');
const router = express.Router();
const db = require('../db');

// Add total budget
router.post('/budget', (req, res) => {
  const { total_budget } = req.body;
  db.query('INSERT INTO budget (total_budget) VALUES (?)', [total_budget], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ id: result.insertId });
  });
});

// Add item
router.post('/item', (req, res) => {
  const { name, price, quantity, budget_id } = req.body;
  db.query('INSERT INTO items (name, price, quantity, budget_id) VALUES (?, ?, ?, ?)',
    [name, price, quantity, budget_id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send({ id: result.insertId });
    });
});

// Get summary
router.get('/summary/:budget_id', (req, res) => {
  const { budget_id } = req.params;
  db.query(`
    SELECT b.total_budget, SUM(i.price * i.quantity) AS total_spent
    FROM budget b
    LEFT JOIN items i ON b.id = i.budget_id
    WHERE b.id = ?`, [budget_id],
    (err, results) => {
      if (err) return res.status(500).send(err);
      const { total_budget, total_spent } = results[0];
      const remaining = total_budget - (total_spent || 0);
      res.send({ total_budget, total_spent: total_spent || 0, remaining });
    });
});

// Get all items for a budget
router.get('/items/:budget_id', (req, res) => {
  const { budget_id } = req.params;
  db.query('SELECT * FROM items WHERE budget_id = ?', [budget_id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

// Get the latest budget ID
router.get('/latest-budget', (req, res) => {
  db.query('SELECT id FROM budget ORDER BY id DESC LIMIT 1', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length > 0) {
      res.json({ id: results[0].id });
    } else {
      res.status(404).json({ message: 'No budget found' });
    }
  });
});

module.exports = router;

