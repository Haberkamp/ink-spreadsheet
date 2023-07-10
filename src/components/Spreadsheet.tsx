import { reachedEnd } from '../utils/array.utils.js';
import React from 'react';
import useColumnWidth from '../hooks/useColumnWidth.js';
import { Text, Box } from 'ink';
import {
  BORDER_BOTTOM,
  BORDER_STYLE,
  HORIZONTAL_PADDING,
} from '../constants.js';
import { NonObject } from '../types.js';

interface ColumnDef {
  header: string;
  key: string;
}

interface Props {
  columns: ColumnDef[];
  data: Record<string, NonObject>[];
}

/**
 * @example
 * const columnHelper = createColumnHelper<Entity>();
 * const columns = [
 *   columnHelper('name'),
 *   columnHelper('email', {
 *     header: 'Email'
 *   }),
 * ];
 *
 * export function MyComponent() {
 *   return (
 *     <Spreadsheet columns={columns} data={[]} />
 *   )
 * }
 */
export default function Spreadsheet({ data, columns }: Props) {
  const columnWidth = useColumnWidth(columns.length);

  return (
    <Box width="100%" flexDirection="column" borderStyle={BORDER_STYLE}>
      <Box borderStyle={BORDER_STYLE} {...BORDER_BOTTOM}>
        {columns.map((column, index, items) => (
          <Box
            key={column.key}
            width={columnWidth}
            paddingX={HORIZONTAL_PADDING}
            borderStyle={BORDER_STYLE}
            borderTop={false}
            borderLeft={false}
            borderRight={!reachedEnd(index, items)}
            borderBottom={false}
          >
            <Text bold>{column.header}</Text>
          </Box>
        ))}
      </Box>

      {data.map((row, index, rows) => (
        <Box
          key={index}
          borderStyle={BORDER_STYLE}
          borderBottom={!reachedEnd(index, rows)}
          borderLeft={false}
          borderRight={false}
          borderTop={false}
        >
          {Object.values(row).map((value, index, items) => (
            <Box
              key={index}
              width={columnWidth}
              paddingX={HORIZONTAL_PADDING}
              borderStyle={BORDER_STYLE}
              borderTop={false}
              borderLeft={false}
              borderRight={!reachedEnd(index, items)}
              borderBottom={false}
            >
              <Text>{value}</Text>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
