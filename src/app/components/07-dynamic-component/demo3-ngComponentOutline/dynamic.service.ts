import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DynamicService {
  private output = new Subject<string>();

  constructor() { }

  getObservable() {
    return this.output.asObservable();
  }
  outputFromDynamicComponent(data: string) {
    this.output.next(data);
  }
}
