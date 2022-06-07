import { ForkEffect, spawn } from 'redux-saga/effects';

import meetupSaga from './meetup/meetupSaga';

export default function* rootSaga(): Generator<ForkEffect> {
  yield spawn(meetupSaga);
}
