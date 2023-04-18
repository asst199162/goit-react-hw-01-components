import { ProfileCadr } from './Profile/profile';
import user from 'components/user.json';

import { Statistics } from './Statistics/statistics';
import data from 'components/data.json';

import { FriendList } from './FriendList/friendList';
import friends from 'components/friends.json';

import { TransactionHistory } from './TransactionHistory/transactionHistory';
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
