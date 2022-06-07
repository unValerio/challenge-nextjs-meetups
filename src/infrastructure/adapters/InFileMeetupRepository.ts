import MeetupEntity from '@domain/meetup/MeetupEntity';
import MeetupRepository from '@domain/meetup/MeetupRepository';
import readMeetupsFile from '@infrastructure/inFileStorage/readMeetupsFile';
import createMeetupInFile from '@infrastructure/inFileStorage/createMeetupInFile';
import rewriteMeetupsInFile from '@infrastructure/inFileStorage/rewriteMeetupsInFile';

export default class InFileMeetupRepository implements MeetupRepository {
  async getAll(): Promise<MeetupEntity[]> {
    const meetups = await readMeetupsFile();
    return meetups;
  }

  async getById(id: string): Promise<MeetupEntity> {
    const meetups = await readMeetupsFile();
    const meetupFound = meetups.find((meetup) => meetup.id === id);
    return meetupFound;
  }

  async update(meetup: MeetupEntity): Promise<void> {
    const meetups = await readMeetupsFile();
    const restMeetups = meetups.filter(
      (meetupInFile) => meetupInFile.id != meetup.id
    );
    restMeetups.push(meetup);
    await rewriteMeetupsInFile(restMeetups);
    return;
  }

  async createNew(meetup: MeetupEntity): Promise<void> {
    await createMeetupInFile(meetup);
    return;
  }
}
