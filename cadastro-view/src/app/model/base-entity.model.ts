export abstract class BaseEntity<T> {
  id: T;

  protected constructor(id: T) {
      this.id = id;
  }
}
