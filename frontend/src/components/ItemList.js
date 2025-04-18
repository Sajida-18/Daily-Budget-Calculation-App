
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ItemList({ budgetId }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (budgetId) {
      axios.get(`http://localhost:5000/api/items/${budgetId}`)
        .then(res => setItems(res.data))
        .catch(() => console.log("No items found"));
    }
  }, [budgetId]);

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Expense History</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">No items added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Quantity</th>
                <th className="px-4 py-2 border">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="px-4 py-2 border text-gray-700">{item.name}</td>
                  <td className="px-4 py-2 border text-red-600">{parseFloat(item.price).toFixed(2)} Tk</td>
                  <td className="px-4 py-2 border">{item.quantity}</td>
                  <td className="px-4 py-2 border font-semibold">
                    {(item.price * item.quantity).toFixed(2)} Tk
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
