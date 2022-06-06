import { call, ForkEffect, put, take, takeEvery } from 'redux-saga/effects';

import * as meetupService from '@services/meetupService';
import ActionTypes from '@state/ActionTypes';
import * as meetupActionCreators from '../../actionCreators/meetup/meetupActionCreators';

export function* getAll(): Generator {
  const meetups = yield call(meetupService.getAll);
  yield put(meetupActionCreators.getAllMeetupsSuccess(meetups));
}

export function* createNew(
  action: meetupActionCreators.MeetupAction
): Generator {
  try {
    yield call(meetupService.createNew, action.payload);
    yield put(meetupActionCreators.createNewSuccess());
  } catch (err) {
    yield put(meetupActionCreators.createNewFailure(err));
  }
}

export default function* root(): Generator<ForkEffect> {
  yield takeEvery(ActionTypes.GET_ALL_MEETUPS, getAll);
  yield takeEvery(ActionTypes.CREATE_NEW_MEETUP, createNew);
}
