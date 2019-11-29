/*

undefined
MaaS InvoiceLineItem schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as InvoiceUnits_ from 'maas-schemas-ts/maas-backend/invoices/invoiceUnits';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Fare_ from 'maas-schemas-ts/core/components/fare';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId =
  'http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json';

// InvoiceLineItem
// The default export. More information at the top.
export type InvoiceLineItem = t.Branded<unknown, InvoiceLineItemBrand>;
export const InvoiceLineItem = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, InvoiceLineItemBrand> => true,
  'InvoiceLineItem',
);
export interface InvoiceLineItemBrand {
  readonly InvoiceLineItem: unique symbol;
}

export default InvoiceLineItem;

// Success
