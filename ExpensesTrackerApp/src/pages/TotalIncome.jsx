import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function TotalIncome() {
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const calculateTotalIncome = async () => {
      const incomesSnapshot = await getDocs(collection(db, 'incomes'));
      const total = incomesSnapshot.docs.reduce((acc, doc) => acc + doc.data().amount, 0);
      setTotalIncome(total);
    };

    calculateTotalIncome();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h2 className="text-2xl font-semibold mb-4">Total Income</h2>
      <p className="text-xl">Your total income is: ${totalIncome.toFixed(2)}</p>
    </div>
  );
}
