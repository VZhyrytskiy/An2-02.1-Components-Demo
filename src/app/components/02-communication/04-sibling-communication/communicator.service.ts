import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommunicatorService {
  // Observable string sources
  private channel = new Subject<string>();

  // Observable string streams
  public channel$ = this.channel.asObservable();

  // Service message commands
  publishData(data: string) {
    this.channel.next(data);
  }
}
