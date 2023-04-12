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
      <ProfileCadr user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </>
  );
};
