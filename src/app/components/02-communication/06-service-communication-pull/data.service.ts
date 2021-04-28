import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {
  private data: T;

  public setData(d: T): void {
    this.data = d;
  }

  public getData(): T {
    return this.data;
  }
}
