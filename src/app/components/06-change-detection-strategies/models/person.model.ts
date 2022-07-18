export class Person {
  constructor(
    public firstName: string,
    public lastName: string
  ) {}

  lastChange() {
    return new Date();
  }
}
