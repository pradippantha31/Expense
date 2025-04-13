import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function IncomeList() {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    const fetchIncomes = async () => {
      const incomesSnapshot = await getDocs(collection(db, 'incomes'));
      const incomesList = incomesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setIncomes(incomesList);
    };

    fetchIncomes();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Income Sources</h2>
      <ul>
        {incomes.map((income) => (
          <li key={income.id} className="bg-white p-4 rounded-xl shadow-md mb-2">
            <h3 className="font-bold">{income.source}</h3>
            <p>Amount: ${income.amount}</p>
            <p>Date: {new Date(income.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
