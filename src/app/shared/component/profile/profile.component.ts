import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: false
})
export class ProfileComponent {
  @Input() user: any;

  editing: boolean = false;
  updatedUser: any = {};

  ngOnInit() {
    this.updatedUser = { ...this.user };
  }

  toggleEdit() {
    this.editing = !this.editing;
    if (!this.editing) {
      this.updatedUser = { ...this.user };
    }
  }

  saveChanges() {
    this.user = { ...this.updatedUser };
    this.editing = false;
  }

}
