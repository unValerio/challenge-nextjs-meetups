import path from 'path';
import fsPromises from 'fs/promises';
import to from 'await-to-js';

export default async function readMeetupsFile(): Promise<
  {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  }[]
> {
  let meetupsAsArray = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

  const filePath = path.resolve(process.cwd(), './storage/meetups.json');

  const [fileDoesntExistError, meetupsData] = await to(
    fsPromises.readFile(filePath, 'utf-8')
  );

  if (fileDoesntExistError) {
    const data = Buffer.from(JSON.stringify(meetupsAsArray, null, 2));
    fsPromises.writeFile(filePath, data);
  } else {
    meetupsAsArray = JSON.parse(meetupsData);
  }

  return meetupsAsArray;
}
