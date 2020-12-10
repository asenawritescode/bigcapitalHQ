

export interface IGeneralLedgerSheetQuery {
  fromDate: Date | string,
  toDate: Date | string,
  basis: string,
  numberFormat: {
    noCents: boolean,
    divideOn1000: boolean,
  },
  noneTransactions: boolean,
  accountsIds: number[],
};

export interface IGeneralLedgerSheetAccountTransaction {
  id: number,
  amount: number,
  formattedAmount: string,
  currencyCode: string,
  note?: string,
  transactionType?: string,
  referenceId?: number,
  referenceType?: string,
  date: Date|string,
};

export interface IGeneralLedgerSheetAccountBalance {
  date: Date|string,
  amount: number,
  formattedAmount: string,
  currencyCode: string,
}

export interface IGeneralLedgerSheetAccount {
  id: number,
  name: string,
  code: string,
  index: number,
  parentAccountId: number,
  transactions: IGeneralLedgerSheetAccountTransaction[],
  opening: IGeneralLedgerSheetAccountBalance,
  closing: IGeneralLedgerSheetAccountBalance,
}

export interface IAccountTransaction {
  id: number,
  index: number,
  draft: boolean,
  note: string,
  accountId: number,
  transactionType: string,
  referenceType: string,
  referenceId: number,
  contactId: number,
  contactType: string,
  credit: number,
  debit: number,
  date: string|Date,
  createdAt: string|Date,
  updatedAt: string|Date,
}