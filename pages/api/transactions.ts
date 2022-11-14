import type { NextApiRequest, NextApiResponse } from 'next';

import { Transaction } from 'types/transactions';

const TRANSACTIONS = [
  {
    date: '2020-02-12 2:03:02',
    amountInCents: 1000,
    tags: ['clients'],
    teams: ['engineering'],
  },
  {
    date: '2020-04-12 2:03:02',
    amountInCents: 1000,
    tags: ['clients', 'meals'],
    teams: ['engineering'],
  },
  {
    date: '2020-02-12 2:03:02',
    amountInCents: 1000,
    tags: ['clients'],
    teams: ['marketing'],
  },
  {
    date: '2020-04-12 2:03:02',
    amountInCents: 1000,
    tags: ['clients', 'meals'],
    teams: ['marketing'],
  },
  {
    date: '2020-02-12 2:03:02',
    amountInCents: 1000,
    tags: ['clients'],
    teams: ['sales'],
  },
  {
    date: '2020-04-12 2:03:02',
    amountInCents: 1000,
    tags: ['clients', 'meals'],
    teams: ['sales'],
  },
];

type Data = {
  status: number;
  data: {
    transactions: Transaction[];
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // eslint-disable-next-line
  const { start_date, end_date, tags, teams } = req.query;
  let filteredTransactions = TRANSACTIONS;

  // eslint-disable-next-line
  if (
    start_date &&
    typeof start_date === 'string' &&
    end_date &&
    typeof end_date === 'string'
  ) {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    filteredTransactions = filteredTransactions.filter(
      (transaction) =>
        new Date(transaction.date).getTime() >= startDate.getTime() &&
        new Date(transaction.date).getTime() <= endDate.getTime()
    );
  }

  if (tags && typeof tags === 'string') {
    const tagsArr = tags.split(',');

    filteredTransactions = filteredTransactions.filter((transaction) =>
      transaction.tags.some((transaction) => tagsArr.includes(transaction))
    );
  }

  if (teams && typeof teams === 'string') {
    const teamsArr = teams.split(',');

    filteredTransactions = filteredTransactions.filter((transaction) =>
      transaction.teams.some((transaction) => teamsArr.includes(transaction))
    );
  }

  res.status(200).json({
    status: 200,
    data: {
      transactions: filteredTransactions,
    },
  });
}
