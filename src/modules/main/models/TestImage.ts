import { jsonProperty, Serializable } from 'ts-serializable';

import { Nullable } from '../../../base/types/BaseTypes';
import { TestUrl } from './TestUrl';

export class TestImage extends Serializable {
  @jsonProperty(String, null) name: Nullable<string> = null;
  @jsonProperty(TestUrl, null) url: Nullable<TestUrl> = null;
}
