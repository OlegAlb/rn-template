import { jsonProperty, Serializable } from 'ts-serializable';

import { Nullable } from '../../types/BaseTypes';
import { Meta } from './Meta';

export default class Pagination extends Serializable {
  @jsonProperty(Meta, null) meta: Nullable<Meta> = null;
}
