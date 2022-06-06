import MeetupEntity from './MeetupEntity';

export default interface MeetupRepository {
  getAll(): Promise<MeetupEntity[]>;
  getById(id: string): Promise<MeetupEntity>;
  update(meetup: MeetupEntity): Promise<void>;
  createNew(meetup: MeetupEntity): Promise<void>;
}
