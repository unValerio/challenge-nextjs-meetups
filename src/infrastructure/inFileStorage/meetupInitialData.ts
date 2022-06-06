import MeetupEntity from '@domain/meetup/MeetupEntity';

const initialData: MeetupEntity[] = [
  {
    id: '5203308e-023f-4174-96f3-ec0c23ff056c',
    creationDate: '2022-06-04T20:11:00.812Z',
    title: 'Mexico City',
    image:
      'https://traveldelite.com/wp-content/uploads/2016/05/mexico-city.jpg',
    address: 'Alameda Central, México Centro, México',
    description: 'Hermoso lugar, capital de la República Mexicana',
    isFavorite: true,
  },
  {
    id: '7dbc9077-a9d1-455d-8738-1e7e170e460c',
    creationDate: '2022-06-05T20:11:00.812Z',
    image:
      'https://wallsdesk.com/wp-content/uploads/2017/01/Pictures-of-Salamanca-.jpg',
    address: 'Salamanca, España',
    title: 'Ciudad de Salamanca',
    description: 'Otro hermoso lugar',
    isFavorite: false,
  },
  {
    id: '49f5aec5-4f63-4c01-9ae0-3ec605f760a5',
    creationDate: '2022-06-06T20:11:00.812Z',
    title: 'Stradivarius Headquarters',
    image:
      'https://www.floornature.com/media/photos/30/13912/22_batlleiroig_stradivarius_full.jpg',
    address: 'Cerdanyola del Vallès',
    description:
      'Cerdanyola del Vallès is a municipality in the comarca of the Vallès Occidental in Catalonia, Spain. ',
    isFavorite: false,
  },
];
export default initialData;
