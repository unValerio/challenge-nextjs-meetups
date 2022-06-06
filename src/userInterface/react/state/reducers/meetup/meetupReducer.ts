import MeetupEntity from '@domain/meetup/MeetupEntity';
import ActionTypes from '../../ActionTypes';
import { MeetupAction } from '../../actionCreators/meetup/meetupActionCreators';

type MeetupState = {
  meetups: MeetupEntity[];
  createMeetupSuccess: boolean;
  addToFavoritesSuccess: boolean;
  removeFromFavoritesSuccess: boolean;
  error: string;
};

export const initialState: MeetupState = {
  meetups: [],
  createMeetupSuccess: undefined,
  addToFavoritesSuccess: undefined,
  removeFromFavoritesSuccess: undefined,
  error: undefined,
};

export default function meetupReducer(
  state: MeetupState = initialState,
  action: MeetupAction
): MeetupState {
  switch (action.type) {
    case ActionTypes.CLEAN_MEETUP_STATE:
      return {
        ...state,
        createMeetupSuccess: undefined,
        addToFavoritesSuccess: undefined,
        removeFromFavoritesSuccess: undefined,
        error: undefined,
      };
      break;

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

    case ActionTypes.ADD_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        addToFavoritesSuccess: true,
      };
      break;

    case ActionTypes.REMOVE_FROM_FAVORITES_SUCCESS:
      return {
        ...state,
        removeFromFavoritesSuccess: true,
      };
      break;

    default:
      return state;
  }
}
