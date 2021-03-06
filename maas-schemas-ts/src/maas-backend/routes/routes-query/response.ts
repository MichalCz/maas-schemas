/*

undefined
MaaS.fi routes-query response schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

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
  'http://maasglobal.com/maas-backend/routes/routes-query/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    plan: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.type({
    plan: Defined,
  }),
  (
    x,
  ): x is t.Branded<
    {
      plan: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
