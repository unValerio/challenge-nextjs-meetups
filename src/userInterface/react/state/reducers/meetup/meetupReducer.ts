import MeetupEntity from '@domain/meetup/MeetupEntity';
import ActionTypes from '../../ActionTypes';
import { MeetupActionCreator } from '../../actionCreators/meetup/meetupActionCreators';

type MeetupState = {
  meetups: MeetupEntity[];
  error: string;
};

export const initialState: MeetupState = {
  meetups: [],
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

    default:
      return state;
  }
}
