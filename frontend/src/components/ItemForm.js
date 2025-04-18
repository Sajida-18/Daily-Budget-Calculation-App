
import { useState } from 'react';
import axios from 'axios';

export default function ItemForm({ budgetId }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const submitItem = async () => {
    if (!name || !price || !quantity) return;

    try {
      await axios.post('http://localhost:5000/api/item', {
        name,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        budget_id: budgetId
      });
      setName('');
      setPrice('');
      setQuantity('');
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Add Item</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>
      <button
        onClick={submitItem}
        className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Add Item
      </button>
    </div>
  );
}
