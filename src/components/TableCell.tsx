/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const cellStyle = css`
  border: 4px solid blue;
  text-align: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: lightblue;
  }
`;

interface TableCellProps {
  text: string;
  colSpan?: number;
  rowSpan?: number;
}

const TableCell: React.FC<TableCellProps> = ({ text, colSpan, rowSpan }) => {
  return (
    <td css={cellStyle} colSpan={colSpan} rowSpan={rowSpan}>
      {text}
    </td>
  );
};

export default TableCell;
