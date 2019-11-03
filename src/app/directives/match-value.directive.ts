import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, FormGroup, ValidationErrors } from '@angular/forms';
import { MatchValue } from './match-value.validator';

@Directive({
  selector: '[appMatchValue]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchValueDirective, multi: true }]
})
export class MatchValueDirective {
  @Input('matchValue') matchValueFields: string[] = [];
  constructor() { }
  validate(formGroup: FormGroup): ValidationErrors {
    return MatchValue(this.matchValueFields[0], this.matchValueFields[1])(formGroup);
  }
}
