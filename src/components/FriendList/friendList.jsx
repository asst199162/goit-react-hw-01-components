import { Icon, ItemList, FriendContainer } from './friendList.style';
import { IoAccessibility } from 'react-icons/io5';

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
