import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService<T> {
  private data!: T;

  // api to read data
  getData(): T {
    return this.data;
  }

  // api to send data
  setData(d: T): void {
    this.data = d;
  }
}
