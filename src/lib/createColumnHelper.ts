import { ColumnDef } from '../types.js';

interface CreateColumnHelperOptions {
  header: string;
}

export default function createColumnHelper<TDataType>() {
  return (
    accessor: keyof TDataType extends string ? keyof TDataType : never,
    options?: CreateColumnHelperOptions,
  ): ColumnDef => ({
    key: accessor,
    header: options?.header ?? accessor,
  });
}
