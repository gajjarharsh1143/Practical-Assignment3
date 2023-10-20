import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.scss']
})
export class UserInputFormComponent {
  user = { name: '', email: '' };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("true condition")
  }
}
