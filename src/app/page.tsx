// app/page.tsx
'use client';

import { useState } from 'react';
import IncomeInput from '@/components/incomeinput';
import TaxResult from '@/components/taxresult';

export default function Home() {
  const [income, setIncome] = useState(0);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Personal Tax Calculator
        </h1>

        <IncomeInput income={income} setIncome={setIncome} />
        <TaxResult income={income} />
      </div>
    </main>
  );
}
