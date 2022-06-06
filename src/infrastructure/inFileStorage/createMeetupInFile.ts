import path from 'path';
import fsPromises from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

import MeetupEntity from '@domain/meetup/MeetupEntity';
import readMeetupsFile from './readMeetupsFile';

export default async function createMeetupInFile(
  meetup: MeetupEntity
): Promise<void> {
  const meetupsFilePath = path.resolve(process.cwd(), './storage/meetups.json');
  const meetups = await readMeetupsFile();

  const id = uuidv4();

  meetups.push({ id, ...meetup });

  const meetupsDataToWrite = Buffer.from(JSON.stringify(meetups, null, 2));
  return fsPromises.writeFile(meetupsFilePath, meetupsDataToWrite);
}
