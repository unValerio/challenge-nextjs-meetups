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
}
