import MeetupEntity from '@domain/meetup/MeetupEntity';
import ActionTypes from '../../ActionTypes';

import { MeetupType } from '@userInterface/react/constants/meetupTypes';

/* eslint-disable prettier/prettier */
export type MeetupAction =
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
  };
/* eslint-enable prettier/prettier */

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
