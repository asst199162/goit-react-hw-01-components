import { ProfileCadr } from './Profile/Profile';
import user from 'components/user.json';

import { Statistics } from './Statistics/Statistics';
import data from 'components/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from 'components/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'components/transactions.json';

export const App = () => {
  return (
    <>
      <ProfileCadr
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </>
  );
};
