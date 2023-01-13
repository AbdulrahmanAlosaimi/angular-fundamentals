import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  ViewChild,
} from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  numberRegex: RegExp = /^[0-9]\d*$/;
  @ViewChild('form') form: NgForm | any;
  @Input() user: User = new User();

  @Output() addOrder = new EventEmitter<User>();

  constructor() {}

  ngOnInit() {}

  validateCreditCard(value: any) {
    this.form.controls['creditCard'].setErrors({
      pattern: this.numberRegex.test(this.user.creditCard),
      required: !this.user.creditCard,
    });
    if (
      this.numberRegex.test(this.user.creditCard) &&
      this.user.creditCard &&
      this.user.creditCard.length == 16
    ) {
      this.form.controls['creditCard'].setErrors(null);
    }
  }
}
