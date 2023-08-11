import { Component } from "@angular/core";
import { IfHasRoleDirective } from "./If-has-role.directive";

@Component({
  selector: 'app-custom-if',
  standalone: true,
  imports: [IfHasRoleDirective],
  template: `
  <div *ifHasRole="'user'; else elseTpl">Content for an Admin</div>
  <ng-template #elseTpl>
    <div>Content for a User</div>
  </ng-template>
  `
})
export class CustomNgIfComponent {}
