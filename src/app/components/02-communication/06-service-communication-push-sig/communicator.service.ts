import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  // writable signal
  private channelWSig: WritableSignal<string | undefined> = signal(undefined);

  // transform writable signal to readonly signal
  public channelRSig: Signal<string | undefined> = computed(this.channelWSig);

  // publish data - set value of a writable signal
  publishData(data: string): void {
    this.channelWSig.set(data);
  }
}


