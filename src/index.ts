export { };

import {appendFileSync} from 'fs'

interface Payment {
  id: number,
  amount: number,
  to: string,
  notes: string
}

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[];

class CSVWriter {
  private csv: string;

  constructor(private columns: PaymentColumns) {
    this.csv = this.columns.join(',') + '\n'; // 'id,amount,to,notes'
  }

  private formatRow(p: Payment): string {
    return this.columns.map((col) => p[col]).join(',');
  }

  addRows(values: Payment[]): void {
    let rows = values.map((v) => this.formatRow(v)); // ['1,50,mario,webdev', '2,100,luigi,birthday present']
    this.csv += rows.join('\n');
    console.log(this.csv);
  }

  save(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = '\n';

    console.log('saved to', filename);
  }
}

const writer = new CSVWriter(['id', 'amount', 'to', 'notes']);

writer.addRows([
  { id: 1,
    amount: 50,
    to: 'yoshi',
    notes: 'design work'
  }, { id: 2,
    amount: 100,
    to: 'mario',
    notes: 'aaaaa'
  },
]);

writer.save('data/payments.csv');