/**
 * Task Model
 */
export class Task {
  constructor(
    public id: number = null,
    public action: string,
    public priority: number,
    public estHours: number,
    public actHours: number = 0,
    public done: boolean = false
  ) {}
}
