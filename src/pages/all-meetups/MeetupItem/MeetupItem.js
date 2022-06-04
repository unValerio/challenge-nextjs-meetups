import Image from 'next/image';

import {
  ItemWrapper,
  Card,
  ImageWrapper,
  Content,
  Actions,
} from './MeetupItem.styled';

export default function MeetupItem({ meetup }) {
  return (
    <ItemWrapper>
      <Card>
        <ImageWrapper>
          <Image
            src={meetup.image}
            alt={meetup.title}
            layout="fill"
            objectFit="cover"
            priority={50}
          />
        </ImageWrapper>
        <Content>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </Content>
        <Actions>
          <button>Add to favorites</button>
        </Actions>
      </Card>
    </ItemWrapper>
  );
}
