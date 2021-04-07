import { findDuplicateTransactions, Transaction } from './find-duplicates';

test('Find duplicate transactions', () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 2,
      source: 'B',
      target: 'C',
      amount: 1000,
      description: 'rent'
    },
    {
      id: 3,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 4,
      source: 'A',
      target: 'D',
      amount: 100,
      description: 'groceries'
    },
    {
      id: 5,
      source: 'A',
      target: 'C',
      amount: 250,
      description: 'other'
    }
  ];
  expect(findDuplicateTransactions(transactions)).toEqual([
    {
      id: 1,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie',
      time: '2020-03-01T10:34:30.000Z'
    },
    {
      id: 3,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie',
      time: '2020-03-03T10:36:00.000Z'
    }
  ]);
});
