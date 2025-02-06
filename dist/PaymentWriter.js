"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const writer = new _1.CSVWriter(['id', 'amount', 'to', 'notes']);
writer.addRows([
    { id: 1,
        amount: 50,
        to: 'yoshi',
        notes: 'design work'
    }, { id: 2,
        amount: 100,
        to: 'mario',
        notes: 'aaaaa'
    }, { id: 3,
        amount: 150,
        to: 'peach',
        notes: 'bbbb'
    },
]);
writer.save('data/payments.csv');
