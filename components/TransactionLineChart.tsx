import { FC, useContext } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import { GlobalContext } from 'context/GlobalContext';

const formatCentsToDollars = (value: number) =>
  (value / 100).toLocaleString('en-US', {
    currency: 'USD',
    style: 'currency',
  });

const TransactionsLineChart: FC = () => {
  const { state } = useContext(GlobalContext);
  const transactionsData = state.transactions.transactionsData;

  return (
    <div style={{ height: '400px', width: '100vw' }}>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart data={transactionsData} height={300} width={500}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis tickFormatter={formatCentsToDollars} />
          <Legend />
          <Line
            activeDot={{ r: 8 }}
            dataKey="amountInCents"
            name="Amount in $"
            stroke="#8884d8"
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionsLineChart;
