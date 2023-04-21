import { jsonProperty, Serializable } from 'ts-serializable';

import { Nullable } from '../../../base/types/BaseTypes';
import { TestImage } from './TestImage';

export class Test extends Serializable {
  @jsonProperty(String) testString: Nullable<string> = null;
  @jsonProperty(TestImage, null) image: Nullable<TestImage> = null;
}
