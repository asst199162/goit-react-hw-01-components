import styled from 'styled-components';

export const TableData = styled.td`
  border: ${p => p.theme.borders.black};
  width: 170px;
  text-align: center;
`;

export const TableHead = styled.th`
  border: ${p => p.theme.borders.black};
  text-align: center;
`;
export const Table = styled.table`
  text-align: center;
  padding-top: 25px;
`;

export const TableR = styled.tr`
  :nth-of-type(2n) {
    background-color: #e7d9b9;
  }
`;

export const TableContainer = styled.div`
  padding-top: ${p => p.theme.space[5]}px;
  display: flex;
  justify-content: center;
`;
