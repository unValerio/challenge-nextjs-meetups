import path from 'path';
import fsPromises from 'fs/promises';
import to from 'await-to-js';

import meetupInitialData from './meetupInitialData';

export default async function createStorageFiles(): Promise<void> {
  const meetupsFilePath = path.resolve(process.cwd(), './storage/meetups.json');

  const [meetupsFileDoesntExistError] = await to(
    fsPromises.readFile(meetupsFilePath, 'utf-8')
  );

  if (meetupsFileDoesntExistError) {
    const meetupsDataToWrite = Buffer.from(
      JSON.stringify(meetupInitialData, null, 2)
    );
    return fsPromises.writeFile(meetupsFilePath, meetupsDataToWrite);
  }
}
