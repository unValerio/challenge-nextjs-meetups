import { shallow } from 'enzyme';

import withReduxProvider from '@userInterface/react/utils/testing/withReduxProvider';
import MeetupItem from './MeetupItem';

describe('Components - MeetupItem', () => {
  const meetup = {
    id: 'm1',
    creationDate: '2022-06-04T20:11:00.812Z',
    title: 'title',
    image: 'https://asdf.com/image.jpg',
    address: 'address',
    description: 'description',
    isFavorite: false,
  };

  it('renders <MeetupItem/>  without crashing', () => {
    const store = {};

    const MeetupItemWithProps = (): JSX.Element => (
      <MeetupItem meetup={meetup} />
    );

    const TestComponent = withReduxProvider(store)(MeetupItemWithProps);

    const wrapper = shallow(<TestComponent />);
    expect(wrapper.exists()).toBe(true);
  });
});
