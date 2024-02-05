import { Component } from '@angular/core';
import { OnChangesComponent } from './on-changes/on-changes.component';

@Component({
  selector: 'app-on-changes-demo',
  standalone: true,
  template: `
    <section>
      <div class="layout">
        <label>Action:</label>
        <input
          class="w250"
          type="text"
          #actionField
          (keyup)="onSetValues(actionField, responsibleField)"
        />
      </div>
      <div class="layout">
        <label>Responsible:</label>
        <input
        class="w250"
          type="text"
          #responsibleField
          (keyup)="onSetValues(actionField, responsibleField)"
        />
      </div>
      <app-on-changes [action]="action" [responsible]="responsible">
      </app-on-changes>
    </section>
  `,
  imports: [OnChangesComponent],
  styles: `
  .layout {
    display: flex;
    flex-direction: column;
  }
  .w250 {
    width: 250px;
  }
  `,
})
export class OnChangesDemoComponent {
  responsible!: string;
  action!: string;

  onSetValues(
    actionField: HTMLInputElement,
    responsibleField: HTMLInputElement
  ): void {
    this.responsible = responsibleField.value;
    this.action = actionField.value;
  }
}
