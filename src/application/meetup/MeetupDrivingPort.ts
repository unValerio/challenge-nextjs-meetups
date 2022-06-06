import MeetupEntity from '@domain/meetup/MeetupEntity';

export default interface MeetupDrivingPort {
  getAll(): Promise<MeetupEntity[]>;
  createNew(meetup: MeetupEntity): Promise<void>;
  changeFavoriteStatus(id: string, isFavorite: boolean): Promise<void>;
}
