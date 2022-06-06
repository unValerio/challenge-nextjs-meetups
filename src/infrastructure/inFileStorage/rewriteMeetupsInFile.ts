import path from 'path';
import fsPromises from 'fs/promises';

import MeetupEntity from '@domain/meetup/MeetupEntity';

export default async function rewriteMeetupsInFile(
  meetups: MeetupEntity[]
): Promise<void> {
  const meetupsFilePath = path.resolve(process.cwd(), './storage/meetups.json');
  const meetupsDataToWrite = Buffer.from(JSON.stringify(meetups, null, 2));
  fsPromises.writeFile(meetupsFilePath, meetupsDataToWrite);
  return;
}
