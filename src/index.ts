export { };

import {appendFileSync} from 'fs'


export class CSVWriter<T> {
  private csv: string;

  constructor(private columns: (keyof T)[]) {
    this.csv = this.columns.join(',') + '\n'; // 'id,amount,to,notes'
  }

  private formatRow(value: T): string {
    return this.columns.map((col) => value[col]).join(',');
  }

  addRows(values: T[]): void {
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

