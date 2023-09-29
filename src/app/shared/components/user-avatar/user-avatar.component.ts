import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'groceteria-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {
  @Input() userName: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public pressSignoff(): void {
    this.authService.signoff();
  }
}
