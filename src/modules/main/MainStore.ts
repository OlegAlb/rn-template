import { makeAutoObservable } from 'mobx';

import { Dto } from '../../base/Dto';
import { Nullable } from '../../base/types/BaseTypes';
import FormHelper from '../../helpers/FormHelper';
import MainService from './MainService';
import MainDto from './dto/MainDto';
import { AddressType, MainArrayFormFields } from './forms/AddressForm';
import { MainForm, MainFormFields } from './forms/MainForm';
import { Test } from './models/Test';

export class MainStore {
  mainInitialLoader: boolean = true;
  mainLoader: boolean = false;

  test: Nullable<Test> = null;

  mainForm = MainForm;

  customNumber: number = 1;

  private mainService: MainService;

  constructor() {
    makeAutoObservable(this);

    this.mainService = new MainService();
  }

  init = async () => {
    this.getTest();
    this.getTests();
  };

  getTest = () => {
    this.test = this.mainService.getTest();

    console.log('test', JSON.stringify(this.test, null, 2));
  };

  getTests = () => {
    const tests = this.mainService.getTests();

    console.log('tests', JSON.stringify(tests, null, 2));
  };

  saveFormData = (data: any) => {
    console.log('saveFormData', data);

    const testDto = Dto.populate(MainDto, Object.assign(this.test!, { customNumber: this.customNumber }));

    console.log('saveFormData before someType', testDto);

    testDto.someType = 'TWO';

    console.log('saveFormData after someType', testDto);

    // send data to service
    this.mainService.setData(testDto);
  };

  changeMainForm = (key: MainFormFields, value: any) => {
    this.updateMainFormValue(key, value);
  };

  createFormList = (type: AddressType, key: MainArrayFormFields) => {
    const form = this.mainService.createFormForList(type, key);

    this.updateMainFormValue(MainFormFields.address, [...this.mainForm.address, form]);
  };

  removeFormList = (type: AddressType) => {
    const filterAddress = this.mainForm.address.filter(item => item.type !== type);

    this.updateMainFormValue(MainFormFields.address, [...filterAddress]);
  };

  changeAddressForm = (key: MainArrayFormFields, value: any, type: AddressType) => {
    const arrayIndex = this.mainForm.address.findIndex(item => item.type === type);

    if (arrayIndex === -1) {
      return;
    }

    const newFormAddress = this.mainForm.address.slice();
    newFormAddress[arrayIndex][key] = value;

    this.updateMainFormValue(MainFormFields.address, newFormAddress);
  };

  resetMainForm = () => {
    this.mainForm = MainForm;
  };

  setLoading = (value: boolean) => {
    this.mainLoader = value;
  };

  setInitialLoading = (value: boolean) => {
    this.mainInitialLoader = value;
  };

  private updateMainFormValue = (key: MainFormFields, value: any) => {
    this.mainForm = FormHelper.updateForm(this.mainForm, key, value);
  };

  private setForm = (form: MainForm) => {
    this.mainForm = form;
  };
}
