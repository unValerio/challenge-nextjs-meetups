import type { NextApiRequest, NextApiResponse } from 'next';

import { meetupApi } from '@main';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  if (req.method === 'POST') {
    meetupApi.createNew(req, res);
  } else if (req.method === 'GET') {
    meetupApi.getAll(req, res);
  } else {
    res.status(404).json({});
  }
}
