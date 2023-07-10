# ink-spreadsheet

> Display spreadsheets in your terminal with ease.

![Spreadsheet inside your terminal](preview.avif)

## Install

```shell
npm install ink-spreadsheet
```

## Usage

```typescript jsx
import React from 'react';
import Spreadsheet, { createColumnHelper } from 'ink-spreadsheet';

interface Person {
  name: string;
  email: string;
}

const columnHelper = createColumnHelper<Person>();
const columns = [
  columnHelper('name', {
    header: 'Name',
  }),
  columnHelper('email', {
    header: 'Email',
  }),
];

const data = [
  {
    name: 'John Doe',
    email: 'john@doe.com',
  },
  {
    name: 'Jane Doe',
    email: 'jane@doe.com',
  },
];

export default function Component() {
  return <Spreadsheet columns={columns} data={data} />;
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
