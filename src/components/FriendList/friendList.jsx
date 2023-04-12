export const FriendList = ({ friends }) => {
  return (
    <>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <ul key={id}>
          <img src={avatar} alt="User avatar" className="avatar" width={48} />
          <li>{name}</li>
          <li>{isOnline}</li>
        </ul>
      ))}
    </>
  );
};
