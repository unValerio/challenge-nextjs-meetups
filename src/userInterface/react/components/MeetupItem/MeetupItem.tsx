import Image from 'next/image';
import { useDispatch } from 'react-redux';

import * as meetupActionCreators from '@userInterface/react/state/actionCreators/meetup/meetupActionCreators';
import {
  ItemWrapper,
  Card,
  ImageWrapper,
  Content,
  Actions,
  AddButton,
  RemoveButton,
} from './MeetupItem.styled';

export default function MeetupItem({ meetup }): JSX.Element {
  const dispatch = useDispatch();

  const onAddToFavoritesClick = (): void => {
    dispatch(meetupActionCreators.addToFavorites(meetup.id));
  };

  const onRemoveFromFavoritesClick = (): void => {
    dispatch(meetupActionCreators.removeFromFavorites(meetup.id));
  };

  return (
    <ItemWrapper>
      <Card>
        <ImageWrapper>
          {meetup.image && (
            <Image
              src={`https://res.cloudinary.com/demo/image/fetch/${meetup.image}`}
              alt={meetup.title}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          )}
        </ImageWrapper>
        <Content>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </Content>
        <Actions>
          {!meetup.isFavorite && (
            <AddButton onClick={onAddToFavoritesClick}>
              Add to favorites
            </AddButton>
          )}
          {meetup.isFavorite && (
            <RemoveButton onClick={onRemoveFromFavoritesClick}>
              Remove from favorites
            </RemoveButton>
          )}
        </Actions>
      </Card>
    </ItemWrapper>
  );
}
