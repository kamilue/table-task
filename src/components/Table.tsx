/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TableCell from './TableCell';

const tableStyle = css`
  border-collapse: collapse;
  width: 200px;
  height: 200px;
`;

const tableData = [
  [{ text: '1A' }, { text: '1B', colSpan: 2 }, { text: '1D', rowSpan: 3 }],
  [{ text: '2A', colSpan: 2 }, { text: '2C' }],
  [
    { text: '3A', colSpan: 2, rowSpan: 2 },
    { text: '3C', rowSpan: 2 },
  ],
  [{ text: '4D' }],
];

function Table() {
  return (
    <table css={tableStyle}>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex} {...cell} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
