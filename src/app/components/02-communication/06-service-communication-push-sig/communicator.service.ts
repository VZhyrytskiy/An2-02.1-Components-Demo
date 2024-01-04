import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService<T> {
  // writable signal
  private channelWSig: WritableSignal<T | undefined> = signal(undefined);

  // transform writable signal to readonly signal
  // api to read data
  channelRSig: Signal<T | undefined> = computed(() => this.channelWSig());

  // publish data - set value of a writable signal
  // api to send data
  publish(data: T): void {
    this.channelWSig.set(data);
  }
}


