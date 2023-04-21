import { jsonProperty, Serializable } from 'ts-serializable';

import { Nullable } from '../../../base/types/BaseTypes';

export class User extends Serializable {
  @jsonProperty(Number, null) id: Nullable<number> = null;
  @jsonProperty(String, null) fullName: Nullable<string> = null;
  @jsonProperty(String, null) phone: Nullable<string> = null;
}
