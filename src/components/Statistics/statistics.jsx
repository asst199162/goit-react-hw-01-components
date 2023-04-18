import { Title, StatItem, StatList, Statistic } from './statistics.style';
import PropTypes from 'prop-types';

export const Statistics = ({ data, title }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}
      <StatList>
        {data.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: randomColor() }}>
            <span>{label}</span>
            <span>{percentage}</span>
          </StatItem>
        ))}
      </StatList>
    </Statistic>
  );
};
const randomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
};
