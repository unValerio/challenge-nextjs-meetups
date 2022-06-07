import { shallow } from 'enzyme';

import MainNavigation, { findFavoriteMeetupsTotal } from './MainNavigation';

describe('Components - MainNavigation', () => {
  const meetups = [
    {
      id: 'm1',
      creationDate: '2022-06-04T20:11:00.812Z',
      title: 'title',
      image: 'https://asdf.com/image.jpg',
      address: 'address',
      description: 'description',
      isFavorite: true,
    },
  ];

  it('renders <MainNavigation/>  without crashing', () => {
    const wrapper = shallow(<MainNavigation meetups={meetups} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('finds the total quantity of meetups in a list of favorites', () => {
    const meetupList = meetups.concat([
      {
        id: 'm2',
        creationDate: '2022-06-05T20:11:00.812Z',
        title: 'title',
        image: 'https://asdf.com/image.jpg',
        address: 'address',
        description: 'description',
        isFavorite: false,
      },
    ]);

    const total = findFavoriteMeetupsTotal(meetupList);
    expect(total).toBe(1);
  });
});
