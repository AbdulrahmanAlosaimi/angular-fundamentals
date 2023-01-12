import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input() user: User = new User();

  @Output() addOrder = new EventEmitter<User>();

  constructor() {}

  ngOnInit() {}
}
