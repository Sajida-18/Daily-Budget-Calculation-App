import { useState } from 'react';
import axios from 'axios';

export default function BudgetForm({ setBudgetId }) {
  const [budget, setBudget] = useState('');

  const submitBudget = async () => {
    const res = await axios.post('http://localhost:5000/api/budget', { total_budget: budget });
    setBudgetId(res.data.id);
    setBudget('');
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Set Total Budget</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
      <input
        type="number"
        placeholder="Enter Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      </div>
      <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800" onClick={submitBudget}>Set Budget</button>
    </div>
  );
}
