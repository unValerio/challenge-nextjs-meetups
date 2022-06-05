import MeetupEntity from '@domain/meetup/MeetupEntity';
import MeetupRepository from '@domain/meetup/MeetupRepository';
import MeetupDrivingPort from './MeetupDrivingPort';

export default class MeetupApplication implements MeetupDrivingPort {
  private meetupRepository: MeetupRepository;

  constructor(meetupRepository: MeetupRepository) {
    this.meetupRepository = meetupRepository;
  }

  public async getAll(): Promise<MeetupEntity[]> {
    const meetups = await this.meetupRepository.getAll();
    return meetups;
  }
}
