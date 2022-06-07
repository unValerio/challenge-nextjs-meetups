import MeetupEntity from '@domain/meetup/MeetupEntity';
import ActionTypes from '../../ActionTypes';

import { MeetupType } from '@userInterface/react/constants/meetupTypes';

/* eslint-disable prettier/prettier */
export type MeetupAction =
  // clean
  | { type: ActionTypes.CLEAN_MEETUP_STATE; payload: Record<string, never> }
  // getAll
  | { type: ActionTypes.GET_ALL_MEETUPS; payload: Record<string, never> }
  | { type: ActionTypes.GET_ALL_MEETUPS_FAILURE; payload: { error: string } }
  | {
    type: ActionTypes.GET_ALL_MEETUPS_SUCCESS;
    payload: { meetups: MeetupEntity[] };
  }
  // createNew
  | { type: ActionTypes.CREATE_NEW_MEETUP; payload: MeetupType }
  | { type: ActionTypes.CREATE_NEW_MEETUP_FAILURE; payload: { error: string } }
  | {
    type: ActionTypes.CREATE_NEW_MEETUP_SUCCESS;
    payload: Record<string, never>;
  }
  // addToFavorites
  | { type: ActionTypes.ADD_TO_FAVORITES; payload: { id: string } }
  | { type: ActionTypes.ADD_TO_FAVORITES_FAILURE; payload: { error: string } }
  | {
    type: ActionTypes.ADD_TO_FAVORITES_SUCCESS;
    payload: Record<string, never>;
  }
  // removeFromFavorites
  | { type: ActionTypes.REMOVE_FROM_FAVORITES; payload: { id: string } }
  | { type: ActionTypes.REMOVE_FROM_FAVORITES_FAILURE; payload: { error: string } }
  | {
    type: ActionTypes.REMOVE_FROM_FAVORITES_SUCCESS;
    payload: Record<string, never>;
  };
/* eslint-enable prettier/prettier */

// clean
export const clean = (): MeetupAction => ({
  payload: {},
  type: ActionTypes.CLEAN_MEETUP_STATE,
});

// getAll
export const getAllMeetups = (): MeetupAction => ({
  payload: {},
  type: ActionTypes.GET_ALL_MEETUPS,
});

export const getAllMeetupsFailure = ({ error }): MeetupAction => ({
  payload: { error },
  type: ActionTypes.GET_ALL_MEETUPS_FAILURE,
});

export const getAllMeetupsSuccess = (
  meetups: MeetupEntity[]
): MeetupAction => ({
  payload: { meetups },
  type: ActionTypes.GET_ALL_MEETUPS_SUCCESS,
});

// createNew
export const createNew = (values: MeetupType): MeetupAction => ({
  payload: values,
  type: ActionTypes.CREATE_NEW_MEETUP,
});

export const createNewFailure = ({ error }): MeetupAction => ({
  payload: { error },
  type: ActionTypes.CREATE_NEW_MEETUP_FAILURE,
});

export const createNewSuccess = (): MeetupAction => ({
  payload: {},
  type: ActionTypes.CREATE_NEW_MEETUP_SUCCESS,
});

// addToFavorites
export const addToFavorites = (id: string): MeetupAction => ({
  payload: { id },
  type: ActionTypes.ADD_TO_FAVORITES,
});

export const addToFavoritesFailure = ({ error }): MeetupAction => ({
  payload: { error },
  type: ActionTypes.ADD_TO_FAVORITES_FAILURE,
});

export const addToFavoritesSuccess = (): MeetupAction => ({
  payload: {},
  type: ActionTypes.ADD_TO_FAVORITES_SUCCESS,
});

// removeFromFavorites
export const removeFromFavorites = (id: string): MeetupAction => ({
  payload: { id },
  type: ActionTypes.REMOVE_FROM_FAVORITES,
});

export const removeFromFavoritesFailure = ({ error }): MeetupAction => ({
  payload: { error },
  type: ActionTypes.REMOVE_FROM_FAVORITES_FAILURE,
});

export const removeFromFavoritesSuccess = (): MeetupAction => ({
  payload: {},
  type: ActionTypes.REMOVE_FROM_FAVORITES_SUCCESS,
});
