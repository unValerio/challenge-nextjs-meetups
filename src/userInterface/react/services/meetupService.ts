import axios from 'axios';
import to from 'await-to-js';

import MeetupEntity from '@domain/meetup/MeetupEntity';
import { MeetupType } from '../constants/meetupTypes';

export const getAll = async (): Promise<MeetupEntity[]> => {
  const [err, res] = await to(
    axios({
      method: 'GET',
      url: '/api/meetups',
    })
  );
  if (err) throw new Error('Error al cargar meetups');

  return res.data;
};

export const createNew = async (meetupValues: MeetupType): Promise<void> => {
  const [err] = await to(
    axios({
      method: 'POST',
      url: '/api/meetups',
      data: meetupValues,
    })
  );
  if (err) throw new Error('Error al crear meetup');

  return;
};

export const changeFavoriteStatus = async (
  id: string,
  newFavoriteStatus: boolean
): Promise<void> => {
  const [err] = await to(
    axios({
      method: 'PATCH',
      url: `/api/meetups/${id}`,
      data: { isFavorite: newFavoriteStatus },
    })
  );
  if (err) throw new Error('Error al agregar a favoritos');

  return;
};
