import { Card, Form, Control, Actions } from './NewMeetupForm.styled';

export default function NewMeetupForm() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <Control>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </Control>
        <Control>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </Control>
        <Control>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </Control>
        <Control>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
        </Control>
        <Actions>
          <button>Add Meetup</button>
        </Actions>
      </Form>
    </Card>
  );
}
