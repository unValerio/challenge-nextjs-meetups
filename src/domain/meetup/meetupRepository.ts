import MeetupEntity from './MeetupEntity';

export default interface MeetupRepository {
  getAll(): Promise<MeetupEntity[]>;
  createNew(meetup: MeetupEntity): Promise<void>;
}
