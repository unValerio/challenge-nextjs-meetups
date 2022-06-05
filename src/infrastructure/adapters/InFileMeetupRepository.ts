import MeetupEntity from '@domain/meetup/MeetupEntity';
import MeetupRepository from '@domain/meetup/MeetupRepository';
import readMeetupsFile from '@infrastructure/inFileStorage/readMeetupsFile';

export default class InFileMeetupRepository implements MeetupRepository {
  async getAll(): Promise<MeetupEntity[]> {
    const meetupsArray = await readMeetupsFile();
    const meetups = meetupsArray.map((meetup) => new MeetupEntity(meetup));
    return meetups;
  }
}
