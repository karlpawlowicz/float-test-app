import type { NextApiRequest, NextApiResponse } from 'next';

import { Team } from 'types/transactions';

type Data = {
  status: number;
  data: {
    teams: Team[];
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    status: 200,
    data: {
      teams: ['engineering', 'marketing', 'sales'],
    },
  });
}
