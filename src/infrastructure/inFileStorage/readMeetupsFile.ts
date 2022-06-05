import path from 'path';
import fsPromises from 'fs/promises';
import to from 'await-to-js';

import MeetupEntity from '@domain/meetup/MeetupEntity';

export default async function readMeetupsFile(): Promise<MeetupEntity[]> {
  const filePath = path.resolve(process.cwd(), './storage/meetups.json');

  const [err, meetupsData] = await to(fsPromises.readFile(filePath, 'utf-8'));
  if (err) throw err;

  return JSON.parse(meetupsData);
}
