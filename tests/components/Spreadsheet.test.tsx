import React from 'react';
import { render } from 'ink-testing-library';
import { describe, it, expect } from 'vitest';
import Spreadsheet from '../../src/components/Spreadsheet.js';
import createColumnHelper from '../../src/lib/createColumnHelper.js';

describe('src/component/Spreadsheet.tsx', () => {
  it.each([
    [
      [
        {
          header: 'Full name',
          key: 'name',
        },
        {
          header: 'Email',
          key: 'email',
        },
      ],
      [
        {
          name: 'John Doe',
          email: 'john@doe.com',
        },
        {
          name: 'John Doe',
          email: 'john@doe.com',
        },
      ],
    ],
    // single column
    [
      [
        {
          header: 'Full name',
          key: 'name',
        },
      ],
      [
        {
          name: 'John Doe',
        },
      ],
    ],
    // long cell data
    [
      [
        {
          header: 'Path',
          key: 'path',
        },
        {
          header: 'Size',
          key: 'size',
        },
      ],
      [
        {
          path: '/this/is/a/very/long/path/that/will/be/wrapped/or/will/it/not/?',
          size: '1.2MB',
        },
        {
          path: '/not/so/long/path',
          size: '100GB',
        },
      ],
    ],
  ])('should render the correct output', (columns, data) => {
    const { lastFrame } = render(<Spreadsheet columns={columns} data={data} />);

    expect(lastFrame()).toMatchSnapshot();
  });

  it('should render the correct output when using the column helper', () => {
    // ARRANGE
    interface Person {
      name: string;
    }

    const columnHelper = createColumnHelper<Person>();

    const columns = [
      columnHelper('name', {
        header: 'Full name',
      }),
    ];

    const data: Person[] = [
      {
        name: 'John Doe',
      },
    ];

    // ACT
    const { lastFrame } = render(<Spreadsheet columns={columns} data={data} />);

    // ASSERT
    expect(lastFrame()).toMatchSnapshot();
  });
});
