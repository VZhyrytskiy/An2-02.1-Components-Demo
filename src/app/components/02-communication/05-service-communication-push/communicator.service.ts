import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService<T> {
  private channel$$ = new Subject<T>();

  // api to read data
  channel$ = this.channel$$.asObservable();

  // api to send data
  publish(data: T): void {
    this.channel$$.next(data);
  }
}
