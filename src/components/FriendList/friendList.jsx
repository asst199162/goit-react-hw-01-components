import { Icon, ItemList, FriendContainer } from './FriendList.style';
import { IoAccessibility } from 'react-icons/io5';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendContainer>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <ItemList key={id}>
          <Icon isOnline={isOnline}>
            <IoAccessibility />
          </Icon>
          <img src={avatar} alt="User avatar" width="50" />
          <p>{name}</p>
        </ItemList>
      ))}
    </FriendContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
