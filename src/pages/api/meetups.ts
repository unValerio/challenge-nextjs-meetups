import type { NextApiRequest, NextApiResponse } from 'next';

import { meetupApi } from '@main';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  if (req.method === 'POST') {
    // meetupApi.postMeetup(req, res);
    res.status(200).json({});
  } else {
    meetupApi.getAll(req, res);
  }
}
