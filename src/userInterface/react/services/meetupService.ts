import axios from 'axios';
import to from 'await-to-js';

import MeetupEntity from '@domain/meetup/MeetupEntity';

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
