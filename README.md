# ink-spreadsheet

> Display spreadsheets in your terminal with ease.

## Install

```shell
npm install ink-spreadsheet
```

## Usage

```typescript jsx
import React from 'react';
import Spreadsheet from 'ink-spreadsheet';

const columns = [
  {
    header: 'Name',
    key: 'name',
  },
  {
    key: 'email',
    header: 'Email',
  },
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
