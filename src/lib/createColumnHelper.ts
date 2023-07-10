interface CreateColumnHelperOptions {
  header: string;
}

export default function createColumnHelper<TDataType extends object>() {
  return (accessor: keyof TDataType, options?: CreateColumnHelperOptions) => ({
    key: accessor,
    header: options?.header ?? accessor,
  });
}
