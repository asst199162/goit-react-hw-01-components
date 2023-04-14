import {
  Table,
  TableData,
  TableHead,
  TableR,
} from './transactionHistory.style';

export const TransactionHistory = ({ item }) => {
  return (
    <Table>
      <tbody>
        {item.map(({ id, type, amount, currency }) => {
          return (
            <TableR key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableR>
          );
        })}
      </tbody>

      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>
    </Table>
  );
};
