import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/common/model/user.model';
import { AuthService } from 'src/app/common/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  formGroup: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router:Router
  ) {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }
  ngOnInit() {
  }
  ngOnDestroy() {
  }

  onLogin() {
    const user: User = {
      username: this.formGroup.get('username').value,
      password: this.formGroup.get('password').value,
      exciseBaseControl: null
    };
    this.authService
      .login(user)
      .then(ok => {
        console.log('ok: ', ok)

      })
      .catch(error => {
        console.log('ไม่สารถเข้าสู่ระบบได้');
        alert("ไม่สารถเข้าสู่ระบบได้");
      });
  }
}
