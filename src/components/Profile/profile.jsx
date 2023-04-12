import { Avatar, Container } from './profile.style';

export const ProfileCadr = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Container>
      <div>
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
        <ul>
          <li>
            <span>Followers</span>
            <span>{followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};
