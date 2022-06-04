import readMeetupsFile from '../inFileStorage/readMeetupsFile';

export default async function getMeetups(req, res) {
  const meetups = await readMeetupsFile();

  res.status(200).json(meetups);
}
