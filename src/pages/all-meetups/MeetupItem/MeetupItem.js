import Image from 'next/image';

import { useFetch } from '../../../utils/hooks/useFetch';
import {
  ItemWrapper,
  Card,
  ImageWrapper,
  Content,
  Actions,
} from './MeetupItem.styled';

export default function MeetupItem() {
  const { data } = useFetch({
    url: '/data.json',
  });

  if (!data) return <p>Loading...</p>;
  let [item] = data;

  return (
    <ItemWrapper>
      <Card>
        <ImageWrapper>
          <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            priority={50}
          />
        </ImageWrapper>
        <Content>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </Content>
        <Actions>
          <button>Add to favorites</button>
        </Actions>
      </Card>
    </ItemWrapper>
  );
}
