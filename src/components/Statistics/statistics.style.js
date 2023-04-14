import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const Statistic = styled.section`
  padding-top: ${p => p.theme.space[5]}px;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;
export const StatItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: ${p => p.theme.space[6]}px;
  height: ${p => p.theme.space[6]}px;
`;
