import {FieldTypes} from './app.constants';

export interface Data {
  id: string;
  wbRating: number;
  reviewsCount: number;
  nomenclature: number;
  sku: string;
  name: string;
  brandName: string;
  brandId: string;
  image: string;
  preview: string;
  ordered: number;
  soldQuantity: number;
  soldAmount: number;
  orderedAmount: number;
  availability: number;
}

export interface Filters {
  name: string;
  brandName: string;
}

export interface TableConfig {
  field: keyof Data;
  name: string;
  type: FieldTypes
}
