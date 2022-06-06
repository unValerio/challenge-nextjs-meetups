export default interface MeetupEntity {
  readonly id: string;
  readonly creationDate: string;
  title: string;
  image: string;
  address: string;
  description: string;
  isFavorite: boolean;
}
