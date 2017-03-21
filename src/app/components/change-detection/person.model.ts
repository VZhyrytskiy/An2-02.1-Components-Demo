export class Person {
  constructor(
    private firstName: string,
    private lastName: string
  ) {}

  lastChange() {
    return new Date();
  }
}
