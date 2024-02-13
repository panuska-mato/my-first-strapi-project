import type { Schema, Attribute } from '@strapi/strapi';

export interface XxxJjj extends Schema.Component {
  collectionName: 'components_xxx_jjjs';
  info: {
    displayName: 'jjj';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'xxx.jjj': XxxJjj;
    }
  }
}
