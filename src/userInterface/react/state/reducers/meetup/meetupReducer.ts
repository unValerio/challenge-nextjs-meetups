import MeetupEntity from '@domain/meetup/MeetupEntity';
import ActionTypes from '../../ActionTypes';
import { MeetupActionCreator } from '../../actionCreators/meetup/meetupActionCreators';

type MeetupState = {
  meetups: MeetupEntity[];
  createMeetupSuccess: boolean;
  error: string;
};

export const initialState: MeetupState = {
  meetups: [],
  createMeetupSuccess: undefined,
  error: undefined,
};

export default function meetupReducer(
  state: MeetupState = initialState,
  action: MeetupActionCreator
): MeetupState {
  switch (action.type) {
    case ActionTypes.GET_ALL_MEETUPS_SUCCESS:
      return {
        ...state,
        meetups: action.payload.meetups,
        error: undefined,
      };
      break;

    case ActionTypes.CREATE_NEW_MEETUP_SUCCESS:
      return {
        ...state,
        createMeetupSuccess: true,
      };
      break;

    default:
      return state;
  }
}
