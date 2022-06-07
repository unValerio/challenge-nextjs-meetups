import type { NextApiRequest, NextApiResponse } from 'next';

import { meetupApi } from '@main';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  if (req.method === 'PATCH') {
    meetupApi.changeFavoriteStatus(req, res);
  } else {
    res.status(404).json({});
  }
}
