/*

undefined
MaaS product provider schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as PersonalDataAllowItem_ from 'maas-schemas-ts/core/components/personalDataAllowItem';

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

export const schemaId = 'http://maasglobal.com/maas-backend/products/provider.json';

// Provider
// The default export. More information at the top.
export type Provider = t.Branded<
  {
    name?: string;
    agencyId?: Common_.AgencyId;
    groupId?: string;
    hidden?: boolean;
    branding?: {
      primaryColor?: string;
      secondaryColor?: string;
      icon?: Units_.Url;
      logoSolidColor?: Units_.Url;
      logoFullColor?: Units_.Url;
    };
    features?: {
      ticket?: boolean;
      stationsList?: boolean;
      stationsRetrieve?: boolean;
    } & {
      ticket: Defined;
      stationsList: Defined;
      stationsRetrieve: Defined;
    };
    extra?: {
      radius?: {
        fixedFareAmount?: number;
        fixedFareCurrency?: Units_.Currency | (string & ('WMP' | 'TOKEN'));
        maxRadiusMetres?: number;
        description?: string;
      } & {
        fixedFareAmount: Defined;
        fixedFareCurrency: Defined;
        maxRadiusMetres: Defined;
      };
      prebooking?: {
        isSupported?: boolean;
        minIntervalUntilBooking?: number;
        maxIntervalUntilBooking?: number;
      } & {
        isSupported: Defined;
        minIntervalUntilBooking: Defined;
        maxIntervalUntilBooking: Defined;
      };
    };
    personalDataOptionsAllow?: Array<PersonalDataAllowItem_.PersonalDataAllowItem>;
    personalDataCreateAllow?: Array<PersonalDataAllowItem_.PersonalDataAllowItem>;
    optionalParameters?: Array<
      {
        id?: string;
        name?: string;
        type?: 'oneOf' | 'someOf' | 'allOf' | 'oneOrNoneOf' | 'someOrNoneOf';
        userSelectable?: boolean;
        inputs?: Array<
          {
            id?: string;
            name?: string;
            type?: 'string' | 'number' | 'boolean' | 'station';
            default?: string | number | boolean;
          } & {
            id: Defined;
            name: Defined;
            type: Defined;
          }
        >;
      } & {
        id: Defined;
        name: Defined;
        inputs: Defined;
      }
    >;
  } & {
    name: Defined;
    agencyId: Defined;
    groupId: Defined;
    branding: Defined;
    hidden: Defined;
    features: Defined;
    personalDataOptionsAllow: Defined;
    personalDataCreateAllow: Defined;
    optionalParameters: Defined;
  },
  ProviderBrand
>;
export const Provider = t.brand(
  t.intersection([
    t.partial({
      name: t.string,
      agencyId: Common_.AgencyId,
      groupId: t.string,
      hidden: t.boolean,
      branding: t.partial({
        primaryColor: t.string,
        secondaryColor: t.string,
        icon: Units_.Url,
        logoSolidColor: Units_.Url,
        logoFullColor: Units_.Url,
      }),
      features: t.intersection([
        t.partial({
          ticket: t.boolean,
          stationsList: t.boolean,
          stationsRetrieve: t.boolean,
        }),
        t.type({
          ticket: Defined,
          stationsList: Defined,
          stationsRetrieve: Defined,
        }),
      ]),
      extra: t.partial({
        radius: t.intersection([
          t.partial({
            fixedFareAmount: t.number,
            fixedFareCurrency: t.union([
              Units_.Currency,
              t.intersection([t.string, t.union([t.literal('WMP'), t.literal('TOKEN')])]),
            ]),
            maxRadiusMetres: t.number,
            description: t.string,
          }),
          t.type({
            fixedFareAmount: Defined,
            fixedFareCurrency: Defined,
            maxRadiusMetres: Defined,
          }),
        ]),
        prebooking: t.intersection([
          t.partial({
            isSupported: t.boolean,
            minIntervalUntilBooking: t.number,
            maxIntervalUntilBooking: t.number,
          }),
          t.type({
            isSupported: Defined,
            minIntervalUntilBooking: Defined,
            maxIntervalUntilBooking: Defined,
          }),
        ]),
      }),
      personalDataOptionsAllow: t.array(PersonalDataAllowItem_.PersonalDataAllowItem),
      personalDataCreateAllow: t.array(PersonalDataAllowItem_.PersonalDataAllowItem),
      optionalParameters: t.array(
        t.intersection([
          t.partial({
            id: t.string,
            name: t.string,
            type: t.union([
              t.literal('oneOf'),
              t.literal('someOf'),
              t.literal('allOf'),
              t.literal('oneOrNoneOf'),
              t.literal('someOrNoneOf'),
            ]),
            userSelectable: t.boolean,
            inputs: t.array(
              t.intersection([
                t.partial({
                  id: t.string,
                  name: t.string,
                  type: t.union([
                    t.literal('string'),
                    t.literal('number'),
                    t.literal('boolean'),
                    t.literal('station'),
                  ]),
                  default: t.union([t.string, t.number, t.boolean]),
                }),
                t.type({
                  id: Defined,
                  name: Defined,
                  type: Defined,
                }),
              ]),
            ),
          }),
          t.type({
            id: Defined,
            name: Defined,
            inputs: Defined,
          }),
        ]),
      ),
    }),
    t.type({
      name: Defined,
      agencyId: Defined,
      groupId: Defined,
      branding: Defined,
      hidden: Defined,
      features: Defined,
      personalDataOptionsAllow: Defined,
      personalDataCreateAllow: Defined,
      optionalParameters: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      name?: string;
      agencyId?: Common_.AgencyId;
      groupId?: string;
      hidden?: boolean;
      branding?: {
        primaryColor?: string;
        secondaryColor?: string;
        icon?: Units_.Url;
        logoSolidColor?: Units_.Url;
        logoFullColor?: Units_.Url;
      };
      features?: {
        ticket?: boolean;
        stationsList?: boolean;
        stationsRetrieve?: boolean;
      } & {
        ticket: Defined;
        stationsList: Defined;
        stationsRetrieve: Defined;
      };
      extra?: {
        radius?: {
          fixedFareAmount?: number;
          fixedFareCurrency?: Units_.Currency | (string & ('WMP' | 'TOKEN'));
          maxRadiusMetres?: number;
          description?: string;
        } & {
          fixedFareAmount: Defined;
          fixedFareCurrency: Defined;
          maxRadiusMetres: Defined;
        };
        prebooking?: {
          isSupported?: boolean;
          minIntervalUntilBooking?: number;
          maxIntervalUntilBooking?: number;
        } & {
          isSupported: Defined;
          minIntervalUntilBooking: Defined;
          maxIntervalUntilBooking: Defined;
        };
      };
      personalDataOptionsAllow?: Array<PersonalDataAllowItem_.PersonalDataAllowItem>;
      personalDataCreateAllow?: Array<PersonalDataAllowItem_.PersonalDataAllowItem>;
      optionalParameters?: Array<
        {
          id?: string;
          name?: string;
          type?: 'oneOf' | 'someOf' | 'allOf' | 'oneOrNoneOf' | 'someOrNoneOf';
          userSelectable?: boolean;
          inputs?: Array<
            {
              id?: string;
              name?: string;
              type?: 'string' | 'number' | 'boolean' | 'station';
              default?: string | number | boolean;
            } & {
              id: Defined;
              name: Defined;
              type: Defined;
            }
          >;
        } & {
          id: Defined;
          name: Defined;
          inputs: Defined;
        }
      >;
    } & {
      name: Defined;
      agencyId: Defined;
      groupId: Defined;
      branding: Defined;
      hidden: Defined;
      features: Defined;
      personalDataOptionsAllow: Defined;
      personalDataCreateAllow: Defined;
      optionalParameters: Defined;
    },
    ProviderBrand
  > => true,
  'Provider',
);
export interface ProviderBrand {
  readonly Provider: unique symbol;
}

export default Provider;

// Success
