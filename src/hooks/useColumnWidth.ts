export default function useColumnWidth(amountOfColumns: number) {
  const columnWidth = 100 / amountOfColumns;

  return `${columnWidth}%` as const;
}
