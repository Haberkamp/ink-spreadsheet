import { expectTypeOf, describe, it } from 'vitest';
import createColumnHelper from '../../src/lib/createColumnHelper.js';

interface Person {
  name: string;
  email: string;
}

describe('src/lib/createColumnHelper.ts', () => {
  it('should autocomplete the correct accessor keys', () => {
    // ARRANGE
    const columnHelper = createColumnHelper<Person>();

    // ACT & ASSERT
    expectTypeOf(columnHelper).parameter(0).toEqualTypeOf<'name' | 'email'>();
  });
});
