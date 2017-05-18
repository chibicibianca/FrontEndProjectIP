import { LoginService, User } from '../../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public user = new User('', '');
  public errorMsg = '';
  public loggedIn: boolean;

  constructor(private _service: LoginService) {
    this.loggedIn = true;
  }

  login() {

    if (!this._service.login(this.user)) {
      this.errorMsg = 'Webmail si/sau parola  gresita!';
    }
  }
}