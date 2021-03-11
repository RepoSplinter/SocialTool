import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import SecurityService from '../../../services/security/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: FormGroup;

  constructor(
    private fb: FormBuilder,
    private securityService: SecurityService,
    private router: Router,

  ) { }

  onLogin() {
    if (this.login.valid) {
      this.securityService.authenticate(this.login.value.email, this.login.value.password).then(user => {
        this.router.navigateByUrl('/').then(async () => {

        });
      }, error => {

      });
    }
  }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: this.fb.control('', [
        Validators.required,
        Validators.email
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(150)
      ])
    });
  }
}
