// components/TaxResult.tsx
'use client';

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

type Props = {
  income: number;
};

export default function TaxResult({ income }: Props) {
  const calculateTax = (income: number) => {
    let tax = 0;
    if (income <= 100000) tax = income * 0.18;
    else if (income <= 300000) tax = 100000 * 0.18 + (income - 100000) * 0.26;
    else if (income <= 500000)
      tax = 100000 * 0.18 + 200000 * 0.26 + (income - 300000) * 0.31;
    else if (income <= 750000)
      tax =
        100000 * 0.18 +
        200000 * 0.26 +
        200000 * 0.31 +
        (income - 500000) * 0.36;
    else
      tax =
        100000 * 0.18 +
        200000 * 0.26 +
        200000 * 0.31 +
        250000 * 0.36 +
        (income - 750000) * 0.41;

    return tax;
  };

  const taxOwed = calculateTax(income);
  const netIncome = income - taxOwed;

  const data = [
    { name: 'Tax Owed', value: taxOwed },
    { name: 'Net Income', value: netIncome },
  ];

  const COLORS = ['#EF4444', '#10B981']; // Tailwind red & green

  return (
    <div className="mt-6 p-6 bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-xl font-semibold mb-4 text-center">Tax Summary</h2>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 space-y-2 text-center md:text-left">
          <p className="text-gray-700">
            <span className="font-medium">Income:</span> ZAR{' '}
            {income.toLocaleString()}
          </p>
          <p className="text-red-600">
            <span className="font-medium">Tax Owed:</span> ZAR{' '}
            {taxOwed.toLocaleString()}
          </p>
          <p className="text-green-600">
            <span className="font-medium">Net Income:</span> ZAR{' '}
            {netIncome.toLocaleString()}
          </p>
        </div>

        <div className="flex-1 w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={(entry) => `${entry.name}`}
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
