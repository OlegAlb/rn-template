import AbstractLocalRepository from '../../../base/db/AbstractLocalRepository';

export default class MainLocalRepository extends AbstractLocalRepository {
  tableName(): string {
    return '';
  }
}
