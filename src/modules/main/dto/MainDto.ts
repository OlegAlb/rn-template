import { jsonProperty, Serializable } from 'ts-serializable';

import { Nullable } from '../../../base/types/BaseTypes';
import { MainSomeType } from '../MainTypes';

export default class MainDto extends Serializable {
  @jsonProperty(String, null) title: Nullable<string> = null;
  @jsonProperty(String, null) desc: Nullable<string> = null;
  @jsonProperty(String, null) someType: Nullable<MainSomeType> = null;
  @jsonProperty(Number, null) customNumber: Nullable<number> = null;
}
