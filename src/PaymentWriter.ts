import { CSVWriter } from ".";


interface Payment {
  id: number,
  amount: number,
  to: string,
  notes: string
}

const writer = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes']);

writer.addRows([
  { id: 1,
    amount: 50,
    to: 'yoshi',
    notes: 'design work'
  }, { id: 2,
    amount: 100,
    to: 'mario',
    notes: 'aaaaa'
  },{ id: 3,
    amount: 150,
    to: 'peach',
    notes: 'bbbb'
  },
]);

writer.save('data/payments.csv');