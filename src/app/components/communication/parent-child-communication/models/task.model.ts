/**
  * Task Model
  */
export class Task {
  constructor(
    public id: number,
    public action: string,
    public priority: number,
    public estHours: number,
    public actHours?: number,
    public done?: boolean
  ) {
    this.id = null;
    this.actHours = 0;
    this.done = false;
  }
}
