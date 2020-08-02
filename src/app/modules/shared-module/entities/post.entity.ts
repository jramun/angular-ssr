import {BaseEntity} from '../../library-module/entities/base.entity';

export class PostEntity extends BaseEntity {
  description?: string;

  constructor(description: string) {
    super();
    this.description = description;
  }

}
