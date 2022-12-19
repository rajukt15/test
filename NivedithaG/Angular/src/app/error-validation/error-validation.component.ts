import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-validation',
  templateUrl: './error-validation.component.html',
  styleUrls: ['./error-validation.component.css'],
})
export class ErrorValidationComponent {
  @Input() errorDesc = '';

  isVisible: boolean = false;

  ngOnChanges() {
    if (this.errorDesc != '') {
      this.isVisible = true;
    }
  }
  closeAlert() {
    this.isVisible = false;
  }
}
