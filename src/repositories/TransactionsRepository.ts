import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const incomes = this.transactions.reduce((sum, current) => {
      if (current.type === 'income') {
        return sum + current.value;
      }

      return sum;
    }, 0);

    const outcomes = this.transactions.reduce((sum, current) => {
      if (current.type === 'outcome') {
        return sum + current.value;
      }

      return sum;
    }, 0);

    const balance = {
      income: incomes,
      outcome: outcomes,
      total: incomes - outcomes,
    };

    return balance;
  }

  public create({ title, value, type }: Request): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
