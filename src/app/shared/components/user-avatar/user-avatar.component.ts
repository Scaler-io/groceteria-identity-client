import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'groceteria-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {
  @Input() userName: string;

  constructor() {}

  ngOnInit(): void {}
}
