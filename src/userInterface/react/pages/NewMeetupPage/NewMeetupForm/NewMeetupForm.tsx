import { useDispatch } from 'react-redux';

import { Card, Form, Control, Actions } from './NewMeetupForm.styled';
import { useForm } from '@userInterface/react/utils/hooks/useForm';
import * as meetupActionCreators from '@userInterface/react/state/actionCreators/meetup/meetupActionCreators';

export default function NewMeetupForm(): JSX.Element {
  const dispatch = useDispatch();

  const { onChange, onSubmit, values } = useForm(newMeetupSubmitCallback, {});

  async function newMeetupSubmitCallback(): Promise<void> {
    dispatch(meetupActionCreators.createNew(values));
  }

  return (
    <Card>
      <Form onSubmit={onSubmit}>
        <Control>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            onChange={onChange}
            required
          />
        </Control>
        <Control>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            name="image"
            onChange={onChange}
            placeholder="Image"
          />
        </Control>
        <Control>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            name="address"
            placeholder="Address"
            onChange={onChange}
          />
        </Control>
        <Control>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows={5}
            name="description"
            placeholder="Description"
            onChange={onChange}
          ></textarea>
        </Control>
        <Actions>
          <button>Add Meetup</button>
        </Actions>
      </Form>
    </Card>
  );
}
