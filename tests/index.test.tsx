import React from 'react';
import { render } from 'ink-testing-library';
import { describe, it, expect } from 'vitest';
import Spreadsheet from '../src/index.js';

const columns = [
  {
    header: 'Full name',
    key: 'name',
  },
  {
    header: 'Email',
    key: 'email',
  },
];

const data = [
  {
    name: 'John Doe',
    email: 'john@doe.com',
  },
  {
    name: 'John Doe',
    email: 'john@doe.com',
  },
];

describe('src/index.tsx', () => {
  it('should render the correct output', () => {
    const { lastFrame } = render(<Spreadsheet columns={columns} data={data} />);

    expect(lastFrame()).toMatchSnapshot();
  });
});
