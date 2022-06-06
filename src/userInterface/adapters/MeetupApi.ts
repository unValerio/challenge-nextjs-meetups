import type { NextApiRequest, NextApiResponse } from 'next';

import MeetupDrivingPort from '@application/meetup/MeetupDrivingPort';

export default class MeetupApi {
  private meetupApplication: MeetupDrivingPort;

  constructor(meetupApplication: MeetupDrivingPort) {
    this.meetupApplication = meetupApplication;
  }

  public async getAll(
    _req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    const meetups = await this.meetupApplication.getAll();
    res.status(200).json(meetups);
  }

  public async createNew(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    await this.meetupApplication.createNew(req.body);
    res.status(200).json({});
  }

  public async changeFavoriteStatus(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    console.log(req.query);
    const { meetupId } = req.query;
    const { isFavorite } = req.body;
    await this.meetupApplication.changeFavoriteStatus(meetupId, isFavorite);
    res.status(200).json({});
  }
}
