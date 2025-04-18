// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Summary({ budgetId }) {
//   const [summary, setSummary] = useState({ total_budget: 0, total_spent: 0, remaining: 0 });

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/summary/${budgetId}`)
//       .then(res => setSummary(res.data));
//   }, [budgetId]);

//   return (
//     <div>
//       <h3>Summary</h3>
//       <p>Total Budget: {summary.total_budget}</p>
//       <p>Total Spent: {summary.total_spent}</p>
//       <p>Remaining: {summary.remaining}</p>
//     </div>
//   );
// }
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Summary({ budgetId }) {
  const [summary, setSummary] = useState({
    total_budget: 0,
    total_spent: 0,
    remaining: 0
  });

  useEffect(() => {
    if (budgetId) {
      axios
        .get(`http://localhost:5000/api/summary/${budgetId}`)
        .then(res => {
          const data = res.data;
          // Ensure all values are numbers
          setSummary({
            total_budget: parseFloat(data.total_budget) || 0,
            total_spent: parseFloat(data.total_spent) || 0,
            remaining: parseFloat(data.remaining) || 0
          });
        })
        .catch(() => console.log("Summary not found"));
    }
  }, [budgetId]);

  const percentageSpent = summary.total_budget
    ? (summary.total_spent / summary.total_budget) * 100
    : 0;

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Budget Status</h2>
      <div className="space-y-2">
        <p className="flex justify-between">
          <span>Total Budget:</span>
          <span>{summary.total_budget.toFixed(2)} Tk</span>
        </p>
        <p className="flex justify-between">
          <span>Spent:</span>
          <span>{summary.total_spent.toFixed(2) } Tk</span>
        </p>
        <p className="flex justify-between">
          <span>Remaining:</span>
          <span>{summary.remaining.toFixed(2)} Tk</span>
        </p>
        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-gray-900 h-2 rounded"
            style={{ width: `${percentageSpent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
