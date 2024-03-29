/**
 * Task Model
 */
export class TaskModel {
  constructor(
    public id: number | null = null,
    public action: string,
    public priority: number,
    public estHours: number,
    public actHours: number = 0,
    public done: boolean = false
  ) {}
}
