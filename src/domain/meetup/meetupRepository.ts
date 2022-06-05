import MeetupEntity from './MeetupEntity';

export default interface MeetupRepository {
  getAll(): Promise<MeetupEntity[]>;
}
