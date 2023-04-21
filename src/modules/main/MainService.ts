import { modelFactory } from '../../base/ModelFactory';
import FormDataFactory from '../../base/formData/FormDataFactory';
import MainDto from './dto/MainDto';
import { MainArrayFormFields } from './forms/AddressForm';
import { AddressForm, AddressType } from './forms/AddressForm';
import { MainForm } from './forms/MainForm';
import { Test } from './models/Test';
import MainApiRepository from './repositories/MainApiRepository';

export default class MainService {
  static LIMIT_DATA = 10;

  mainApi: MainApiRepository;

  constructor() {
    this.mainApi = new MainApiRepository();
  }

  createFormForList = (type: AddressType, key: MainArrayFormFields) => {
    const form = AddressForm;

    (form as any)[key] = type;

    return form;
  };

  setData = (data: MainDto) => {
    // formData example (first argument as image object can be from ImagePicker Result Object)
    const formData = FormDataFactory.create(
      {
        uri: 'uri/to/file',
        type: 'image/jpeg',
        fileName: 'image.jpg',
      },
      'uploadFile',
      data,
    );

    console.log('formData', formData);

    // code here
  };

  getDefaultData = () => {
    const form: MainForm = MainForm;

    const data = {
      email: 'test@test.com',
      lastName: 'Test',
      firstName: 'Test',
    };

    Object.keys(data).map(key => {
      (form as any)[key] = (data as any)[key];
    });

    return form;
  };

  getTest = () => {
    const data = {
      testString: 'Test string',
      testDescString: 'Test desc string',
      image: {
        url: {
          name: 'Url name',
          fullUrl: 'Url fullUrl',
          mime: 'Url mime',
        },
        name: 'Name image',
        desc: 'Desc image',
      },
    };

    return modelFactory.create<Test>(Test, data);
  };

  getTests = () => {
    const data = {
      items: [
        {
          testString: 'Test string',
          testDescString: 'Test desc string',
          image: {
            url: {
              name: 'Url name',
              fullUrl: 'Url fullUrl',
              mime: 'Url mime',
            },
            name: 'Name image',
            desc: 'Desc image',
          },
        },
      ],
      pagination: {
        meta: {
          limit: 10,
          currentOffset: 2,
          totalCount: 2,
        },
      },
    };

    return modelFactory.createPaginationList<Test>(Test, data);
  };
}
