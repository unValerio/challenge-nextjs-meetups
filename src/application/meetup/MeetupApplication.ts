import moment from 'moment';

import MeetupEntity from '@domain/meetup/MeetupEntity';
import MeetupRepository from '@domain/meetup/MeetupRepository';
import MeetupDrivingPort from './MeetupDrivingPort';

export default class MeetupApplication implements MeetupDrivingPort {
  private meetupRepository: MeetupRepository;

  constructor(meetupRepository: MeetupRepository) {
    this.meetupRepository = meetupRepository;
  }

  public async getAll(): Promise<MeetupEntity[]> {
    let meetups = await this.meetupRepository.getAll();

    meetups = meetups.sort((meetupA, meetupB) => {
      return moment(meetupB.creationDate).diff(meetupA.creationDate);
    });

    return meetups;
  }

  public async createNew(meetup: MeetupEntity): Promise<void> {
    await this.meetupRepository.createNew(meetup);
  }

  public async changeFavoriteStatus(
    id: string,
    isFavorite: boolean
  ): Promise<void> {
    const meetup: MeetupEntity = await this.meetupRepository.getById(id);
    meetup.isFavorite = isFavorite;
    await this.meetupRepository.update(meetup);
  }
}
