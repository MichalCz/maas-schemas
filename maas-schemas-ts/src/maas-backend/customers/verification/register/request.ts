/*

undefined
MaaS customer verification TSP registration

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';
import * as Common_ from 'maas-schemas-ts/core/components/common';

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
  'http://maasglobal.com/maas-backend/customers/verification/register/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    customerId?: Units_.IdentityId;
    headers?: ApiCommon_.Headers;
    identityId?: Units_.IdentityId;
    payload?: {
      agencyId?: Common_.AgencyId;
    } & {
      agencyId: Defined;
    };
  } & {
    identityId: Defined;
    customerId: Defined;
    payload: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      customerId: Units_.IdentityId,
      headers: ApiCommon_.Headers,
      identityId: Units_.IdentityId,
      payload: t.intersection([
        t.partial({
          agencyId: Common_.AgencyId,
        }),
        t.type({
          agencyId: Defined,
        }),
      ]),
    }),
    t.type({
      identityId: Defined,
      customerId: Defined,
      payload: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customerId?: Units_.IdentityId;
      headers?: ApiCommon_.Headers;
      identityId?: Units_.IdentityId;
      payload?: {
        agencyId?: Common_.AgencyId;
      } & {
        agencyId: Defined;
      };
    } & {
      identityId: Defined;
      customerId: Defined;
      payload: Defined;
      headers: Defined;
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
