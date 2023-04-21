import { modelFactory } from '../../base/ModelFactory';
import UserFactory from './UserFactory';
import { User } from './models/User';
import UserApiRepository from './repositories/UserApiRepository';
import UserLocalRepository from './repositories/UserLocalRepository';

export default class UserService {
  userApiRepository: UserApiRepository;
  userLocalRepository: UserLocalRepository;
  userFactory: UserFactory;

  constructor() {
    this.userFactory = new UserFactory();
    this.userApiRepository = new UserApiRepository();
    this.userLocalRepository = new UserLocalRepository();
  }

  createEmpty = () => {
    return this.userFactory.createEmpty();
  };

  changeUser = () => {
    return modelFactory.create<User>(User, {
      id: 1,
      fullName: 'New Name',
      phone: '+79999999999',
    });
  };
}
