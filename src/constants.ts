import type { Boxes } from 'cli-boxes';

// Border

export const BORDER_STYLE: keyof Boxes = 'classic';

/**
 * Adds a border to the bottom side of a box.
 *
 * @example
 * <Box {...BORDER_BOTTOM} />
 */
export const BORDER_BOTTOM = {
  borderTop: false,
  borderRight: false,
  borderBottom: true,
  borderLeft: false,
} as const;

export const BORDER_LEFT = {
  borderTop: false,
  borderRight: false,
  borderBottom: false,
  borderLeft: true,
} as const;

// Padding

export const HORIZONTAL_PADDING = 1;
