import {
  Table,
  TableContainer,
  TableData,
  TableHead,
  TableR,
} from './transactionHistory.style';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ item }) => {
  return (
    <TableContainer>
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
    </TableContainer>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
