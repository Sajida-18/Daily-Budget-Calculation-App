

import { useState, useEffect } from 'react';
import BudgetForm from './components/BudgetForm';
import ItemForm from './components/ItemForm';
import Summary from './components/Summary';
import ItemList from './components/ItemList';
import axios from 'axios';

function App() {
  const [budgetId, setBudgetId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/latest-budget')
      .then(res => setBudgetId(res.data.id))
      .catch(() => console.log('No existing budget found'));
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center p-6" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/016/654/971/small_2x/sky-blue-gradient-background-soft-plain-light-blue-and-white-radial-smooth-wallpaper-illustration-design-eps-10-vector.jpg')" }}>


    {/* <div className="min-h-screen bg-blue-100 p-6"> //if want to set the background color */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
         Daily Budget Manager
        </h1>

        <BudgetForm setBudgetId={setBudgetId} />

        {budgetId && (
          <>
            <ItemForm budgetId={budgetId} />
            <Summary budgetId={budgetId} />
            <ItemList budgetId={budgetId} />
          </>
        )}
      </div>
    {/* </div> */}
    </div>
  );
}

export default App;

