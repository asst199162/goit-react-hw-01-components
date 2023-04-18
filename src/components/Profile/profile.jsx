import {
  Avatar,
  Container,
  Item,
  Text,
  ItemStat,
  AmountStat,
  DescriptionText,
} from './Profile.style';
import PropTypes from 'prop-types';

export const ProfileCadr = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <DescriptionText>
        <Avatar src={avatar} alt="User avatar" />
        <Text bold l black>
          {username}
        </Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </DescriptionText>

      <Item>
        <ItemStat>
          <AmountStat bold>Followers</AmountStat>
          <AmountStat gray>{followers}</AmountStat>
        </ItemStat>
        <ItemStat>
          <AmountStat bold>Views</AmountStat>
          <AmountStat gray>{views}</AmountStat>
        </ItemStat>
        <ItemStat noLineBorder>
          <AmountStat bold>Likes</AmountStat>
          <AmountStat gray>{likes}</AmountStat>
        </ItemStat>
      </Item>
    </Container>
  );
};
ProfileCadr.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
