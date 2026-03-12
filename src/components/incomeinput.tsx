// components/IncomeInput.tsx
'use client';

import { ChangeEvent } from 'react';

type Props = {
  income: number;
  setIncome: (value: number) => void;
};

export default function IncomeInput({ income, setIncome }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setIncome(isNaN(val) ? 0 : val);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="income" className="font-medium">
        Annual Income (ZAR)
      </label>
      <input
        id="income"
        type="number"
        value={income}
        onChange={handleChange}
        className="p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-md"
        placeholder="Enter your annual income"
      />
    </div>
  );
}
