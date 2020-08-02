import {BaseEntity} from '../../library-module/entities/base.entity';

export class PostEntity extends BaseEntity {
  private _description?: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
