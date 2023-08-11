import { NgIf } from '@angular/common';
import { Directive, inject, Input } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Directive({
  selector: '[ifHasRole]',
  standalone: true,
  hostDirectives: [{
     directive: NgIf,
     // aliasing ngIfElse input of NgIf directive
     //  to ifHasRoleElse (input = directive name + else) to pass data via component attribute ifHasRoleElse
     inputs: ['ngIfElse: ifHasRoleElse']
  }]
})
export class IfHasRoleDirective {
  // inject NgIf directive and AuthorizationService
  private ngIfDirective = inject(NgIf);
  private authorizationService = inject(AuthorizationService);

  // set ifHasRole input (ngIf input) of NgIf directive
  @Input('ifHasRole')
  set role(role: 'admin' | 'user') {
    this.ngIfDirective.ngIf = this.authorizationService.hasRole(role);
  }
}
