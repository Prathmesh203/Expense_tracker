import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useUserContext } from '../Context';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#4682B4', '#6A5ACD'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ExpensePieChart = () => {
  const  expences  = useUserContext();
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    const categoryTotals = expences.Expences.reduce((acc, expense) => {
      const { Category, Amount } = expense;
      if (!acc[Category]) {
        acc[Category] = 0;
      }
      acc[Category] += Number(Amount);
      return acc;
    }, {});

    const data = Object.keys(categoryTotals).map(category => ({
      name: category,
      value: categoryTotals[category],
    }));

    setPieChartData(data);
  }, [expences]);

  return (
    <>
    <div className='text-center h-[10vh] font-extrabold text-xl bg-slate-300'>Analytics</div>
    <div className='flex justify-center items-center bg-slate-300'>
      
      {pieChartData.length === 0 ? (
<img src="Rectangle1.png" alt="" />      ) : (
    <PieChart width={400} height={400} className='content-center'>
      <Pie
        data={pieChartData}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {pieChartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
      )}
    </div>
    </>
  );
};

export default ExpensePieChart;
