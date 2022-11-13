import type { NextApiRequest, NextApiResponse } from 'next';

import { Tag } from 'types/transactions';

type Data = {
  status: number;
  data: {
    tags: Tag[];
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ status: 200, data: { tags: ['clients', 'meals'] } });
}
