import { jsonProperty, Serializable } from 'ts-serializable';

import { Nullable } from '../../../base/types/BaseTypes';

export class TestUrl extends Serializable {
  @jsonProperty(String, null) name: Nullable<string> = null;
  @jsonProperty(String, null) fullUrl: Nullable<string> = null;
}
