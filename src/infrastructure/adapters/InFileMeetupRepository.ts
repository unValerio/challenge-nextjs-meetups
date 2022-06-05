import MeetupEntity from '@domain/meetup/MeetupEntity';
import MeetupRepository from '@domain/meetup/MeetupRepository';

export default class InFileMeetupRepository implements MeetupRepository {
  getAll(): Promise<MeetupEntity[]> {
    const entidadExemplo1 = new MeetupEntity();
    return Promise.resolve([entidadExemplo1]);
  }
}
