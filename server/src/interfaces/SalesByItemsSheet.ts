import {
  INumberFormatQuery,
} from './FinancialStatements';

export interface ISalesByItemsReportQuery {
  fromDate: Date | string;
  toDate: Date | string;
  numberFormat: INumberFormatQuery;
  noneTransactions: boolean;  
};

export interface ISalesByItemsSheetMeta {
  organizationName: string,
  baseCurrency: string,
};

export interface ISalesByItemsItem {
  id: number,
  name: string,
  code: string,
  quantitySold: number,
  soldCost: number,
  averageSellPrice: number,

  quantitySoldFormatted: string,
  soldCostFormatted: string,
  averageSellPriceFormatted: string,
  currencyCode: string,
};

export interface ISalesByItemsTotal {
  quantitySold: number,
  soldCost: number,
  quantitySoldFormatted: string,
  soldCostFormatted: string,
  currencyCode: string,
};

export interface ISalesByItemsSheetStatement {
  items: ISalesByItemsItem[],
  total: ISalesByItemsTotal
};

