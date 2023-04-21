import AbstractLocalRepository from '../../../base/db/AbstractLocalRepository';

export default class UserLocalRepository extends AbstractLocalRepository {
  tableName(): string {
    return 'user';
  }
}
