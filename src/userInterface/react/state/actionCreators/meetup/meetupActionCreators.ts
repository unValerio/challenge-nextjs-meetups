import MeetupEntity from '@domain/meetup/MeetupEntity';
import ActionTypes from '../../ActionTypes';

/* eslint-disable prettier/prettier */
export type MeetupActionCreator =
  | { type: ActionTypes.GET_ALL_MEETUPS; payload: Record<string, never> }
  | { type: ActionTypes.GET_ALL_MEETUPS_FAILURE; payload: { error: string } }
  | {
    type: ActionTypes.GET_ALL_MEETUPS_SUCCESS;
    payload: { meetups: MeetupEntity[] };
  };
/* eslint-enable prettier/prettier */

export const getAllMeetups = (): MeetupActionCreator => ({
  payload: {},
  type: ActionTypes.GET_ALL_MEETUPS,
});

export const getAllMeetupsFailure = ({ error }): MeetupActionCreator => ({
  payload: { error },
  type: ActionTypes.GET_ALL_MEETUPS_FAILURE,
});

export const getAllMeetupsSuccess = (
  meetups: MeetupEntity[]
): MeetupActionCreator => ({
  payload: { meetups },
  type: ActionTypes.GET_ALL_MEETUPS_SUCCESS,
});
