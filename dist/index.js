"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVWriter = void 0;
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + '\n'; // 'id,amount,to,notes'
    }
    formatRow(value) {
        return this.columns.map((col) => value[col]).join(',');
    }
    addRows(values) {
        let rows = values.map((v) => this.formatRow(v)); // ['1,50,mario,webdev', '2,100,luigi,birthday present']
        this.csv += rows.join('\n');
        console.log(this.csv);
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log('saved to', filename);
    }
}
exports.CSVWriter = CSVWriter;
