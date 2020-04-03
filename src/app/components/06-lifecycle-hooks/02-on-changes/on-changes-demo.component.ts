import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-changes-demo',
  template: `
    <section>
      <div>
         <label>Action:</label>
         <input type="text" #actionField
                (keyup)="onSetValues(actionField, responsibleField)">
      </div>
      <div>
         <label>Responsible:</label>
         <input type="text"
                #responsibleField
                (keyup)="onSetValues(actionField, responsibleField)">
      </div>
      <app-on-changes [action]="action" [responsible]="responsible" >
      </app-on-changes>
    </section>
  `
})
export class OnChangesDemoComponent {
  responsible: string;
  action: string;

  onSetValues(
    actionField: HTMLInputElement,
    responsibleField: HTMLInputElement
  ): void {
      this.responsible = responsibleField.value;
      this.action = actionField.value;
  }
}
