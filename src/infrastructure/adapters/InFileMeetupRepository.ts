import MeetupEntity from '@domain/meetup/MeetupEntity';
import MeetupRepository from '@domain/meetup/MeetupRepository';
import readMeetupsFile from '@infrastructure/inFileStorage/readMeetupsFile';
import createMeetupInFile from '@infrastructure/inFileStorage/createMeetupInFile';

export default class InFileMeetupRepository implements MeetupRepository {
  async getAll(): Promise<MeetupEntity[]> {
    const meetups = await readMeetupsFile();
    return meetups;
  }

  async createNew(meetup: MeetupEntity): Promise<void> {
    await createMeetupInFile(meetup);
    return;
  }
}
