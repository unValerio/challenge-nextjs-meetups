// interface MeetupEntity {
//   readonly id: string;
//   title: string;
//   image: string;
//   address: string;
//   description: string;
// }

// export default MeetupEntity;

export default class MeetupEntity {
  title: string;
  image: string;
  address: string;
  description: string;

  constructor(title = '', image = '', address = '', description = '') {
    this.title = title;
    this.image = image;
    this.address = address;
    this.description = description;
  }
}
