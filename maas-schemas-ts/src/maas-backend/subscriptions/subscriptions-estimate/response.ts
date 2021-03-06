/*

undefined
Response schema for subscriptions-estimate

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Pricing_ from 'maas-schemas-ts/maas-backend/subscriptions/pricing';

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
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-estimate/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    estimate?: Pricing_.Pricing;
    immediateUpdate?: boolean;
    debug?: {};
  } & {
    estimate: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      estimate: Pricing_.Pricing,
      immediateUpdate: t.boolean,
      debug: t.type({}),
    }),
    t.type({
      estimate: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      estimate?: Pricing_.Pricing;
      immediateUpdate?: boolean;
      debug?: {};
    } & {
      estimate: Defined;
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
