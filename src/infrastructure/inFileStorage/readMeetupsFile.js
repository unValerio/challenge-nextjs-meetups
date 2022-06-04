import path from 'path';
import fsPromises from 'fs/promises';
import to from 'await-to-js';

export default async function readMeetupsFile() {
  const filePath = path.resolve(process.cwd(), './storage/meetups.json');

  let [fileDoesntExistError, meetupsData] = await to(
    fsPromises.readFile(filePath)
  );

  if (fileDoesntExistError) {
    meetupsData = {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    };
    const data = Buffer.from(JSON.stringify(meetupsData, null, 2));
    fsPromises.writeFile(filePath, data);
  } else {
    meetupsData = JSON.parse(meetupsData);
  }

  return meetupsData;
}
