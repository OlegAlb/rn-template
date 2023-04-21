export const AddressForm = {
  type: <AddressType>'',
  city: '',
  region: '',
};

export interface IAddress {
  type: AddressType;
  city: string;
  region: string;
}

export enum AddressType {
  temporary = 'temporary',
  actual = 'actual',
}

export enum MainArrayFormFields {
  type = 'type',
  city = 'city',
  region = 'region',
}
