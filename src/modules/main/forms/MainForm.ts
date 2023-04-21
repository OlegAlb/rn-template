import { IAddress } from './AddressForm';
import FormValidationHelper from '../../../helpers/FormValidationHelper';

export const MainForm = {
  email: '',
  lastName: '',
  firstName: '',
  dateOfBirthday: '',
  address: <IAddress[]>[],

  isFormValid: (form: MainForm) => {
    return (
      FormValidationHelper.isEmailValid(form.email) &&
      FormValidationHelper.isRequired(form.email) &&
      FormValidationHelper.isRequired(form.lastName) &&
      FormValidationHelper.isRequired(form.firstName) &&
      FormValidationHelper.isRequired(form.dateOfBirthday) &&
      form.isAddressValid(form)
    );
  },

  isAddressValid: (form: MainForm) => {
    if (form.address.length > 0) {
      return form.address.some(item => item.city.length !== 0 && item.region.length !== 0);
    }

    return true;
  },
};

export interface MainForm {
  email: string;
  lastName: string;
  firstName: string;
  dateOfBirthday: string;
  address: IAddress[];

  isFormValid: (form: MainForm) => boolean;
  isAddressValid: (form: MainForm) => boolean;
}

export enum MainFormFields {
  email = 'email',
  lastName = 'lastName',
  firstName = 'firstName',
  dateOfBirthday = 'dateOfBirthday',
  address = 'address',
}
