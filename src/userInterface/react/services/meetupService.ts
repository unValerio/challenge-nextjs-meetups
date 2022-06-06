import axios from 'axios';
import to from 'await-to-js';

import MeetupEntity from '@domain/meetup/MeetupEntity';
import { MeetupType } from '../constants/meetupTypes';

export const getAll = async (): Promise<MeetupEntity[] | { error: string }> => {
  const [err, res] = await to(
    axios({
      method: 'GET',
      url: '/api/meetups',
    })
  );
  if (err) return { error: 'Error al cargar meetups' };

  return res.data;
};

export const createNew = async (
  meetupValues: MeetupType
): Promise<MeetupEntity[] | { error: string }> => {
  const [err, res] = await to(
    axios({
      method: 'POST',
      url: '/api/meetups',
      data: meetupValues,
    })
  );
  if (err) return { error: 'Error al crear meetup' };

  return res.data;
};
