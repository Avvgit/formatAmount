export interface DataRow {
  id: number;
  currency: string;
  amount: number;
}

export const mockData: DataRow[] = [
  { id: 1, currency: 'EUR', amount: 1990645 },
  { id: 2, currency: 'USD', amount: 350000 },
  { id: 3, currency: 'CLP', amount: 23765333 },
  { id: 4, currency: 'UF', amount: 700.58 },
  { id: 5, currency: 'EUR', amount: 500 },
  { id: 6, currency: 'USD', amount: 600 },
  { id: 7, currency: 'CLP', amount: 700000000 },
  { id: 8, currency: 'UF', amount: 3200.06 },
  { id: 9, currency: 'EUR', amount: 900 },
  { id: 10, currency: 'USD', amount: 1000 },
];

