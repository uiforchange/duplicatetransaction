export interface Transaction {
  id: number;
  source: string;
  target: string;
  amount: number;
  description: string;
}

/**
 * Find duplicate transactions
 * Given a list of transactions, find and return duplicate transactions. There can be more than one duplicate transactions.
 * A transaction can be called duplicate if it has the same `source`, `target`, `amount` and `description`.
 *
 * This is how a transaction looks like.
 *
 * {
 *   id: 1,
 *   source: 'A',
 *   target: 'B',
 *   amount: 300,
 *   description: 'tikkie'
 * }
 *
 * Note:
 * - Create additional functions if required.
 * - Follow proper coding conventions and best practices.
 * - Make sure existing unit test passes.
 * - Write further unit tests to cover maximum code.
 *
 *
 * @param transactions List of transactions
 * @returns {Transaction[]} List of duplicate transactions
 */
export function findDuplicateTransactions(
  transactions: Transaction[]
): Transaction[] {
  let duplicates: Transaction[] = [];
  const filteredArr1 = transactions.reduce(
    (findDuparr: Transaction[], current: Transaction) => {
      let x = findDuparr.filter(
        val =>
          val.source === current.source &&
          val.amount === current.amount &&
          val.description === current.description &&
          val.target === current.target
      );
      if (x.length === 0) {
        return findDuparr.concat([current]);
      } else {
        duplicates.push(...x);
        duplicates.push(current);
        return findDuparr;
      }
    },
    []
  );
  return duplicates;
}
