import { describe, it, expect } from 'vitest';
import createColumnHelper from '../../src/lib/createColumnHelper.js';

interface Person {
  name: string;
  email: string;
}

describe('src/lib/createColumnHelper.ts', () => {
  it('should return correct return value when only providing accessor', () => {
    // ARRANGE
    const columnHelper = createColumnHelper<Person>();

    // ACT
    const result = columnHelper('name');

    // ASSERT
    expect(result).toStrictEqual({
      key: 'name',
      header: 'name',
    });

    it('should return correct return value when specifying header content', () => {
      // ARRANGE
      const columnHelper = createColumnHelper<Person>();

      // ACT
      const result = columnHelper('name', {
        header: 'Name',
      });

      // ASSERT
      expect(result).toStrictEqual({
        key: 'name',
        header: 'Name',
      });
    });
  });
});
