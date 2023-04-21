import { Serializable } from 'ts-serializable';

import Pagination from './modules/pagination/Pagination';

export class ModelFactory {
  create<T extends Serializable>(Model: new () => T, data: Object): T {
    return new Model().fromJSON(data);
  }

  createList<T extends Serializable>(Model: new () => T, data: Object[]): T[] {
    return data.map((json: Object) => new Model().fromJSON(json));
  }

  createPaginationList<T extends Serializable>(Model: new () => T, data: { items: Object[]; pagination: Object }) {
    const items = this.createList<T>(Model, data.items);
    const pagination = this.create<Pagination>(Pagination, data.pagination);

    return { items, pagination };
  }
}

export const modelFactory = new ModelFactory();
