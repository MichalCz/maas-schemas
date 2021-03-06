/*

undefined
MaaS Zendesk push notification forwarder request schema.

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
  'http://maasglobal.com/maas-backend/webhooks/zendesk-push-notification/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    devices?: Array<{
      identifier: Defined;
      type: Defined;
    }>;
    notification?: {
      body?: string;
      title?: string;
      ticket_id?: string;
    };
  } & {
    devices: Defined;
    notification: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      devices: t.array(
        t.type({
          identifier: Defined,
          type: Defined,
        }),
      ),
      notification: t.partial({
        body: t.string,
        title: t.string,
        ticket_id: t.string,
      }),
    }),
    t.type({
      devices: Defined,
      notification: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      devices?: Array<{
        identifier: Defined;
        type: Defined;
      }>;
      notification?: {
        body?: string;
        title?: string;
        ticket_id?: string;
      };
    } & {
      devices: Defined;
      notification: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
