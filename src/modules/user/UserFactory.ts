import { ModelFactory } from '../../base/ModelFactory';
import { User } from './models/User';

export default class UserFactory extends ModelFactory {
  createEmpty = () => {
    return this.create<User>(User, {
      id: 1,
      fullName: 'Name',
      phone: '+788888888888',
    });
  };
}
