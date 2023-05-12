import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {UsuariosService} from './../../servicios/usuarios.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formLogin: FormGroup;

  constructor(public usuariosService: UsuariosService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    this.usuariosService
      .login(this.formLogin.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['']);
      })
      .catch((error) => console.log(error));
  }
  google() {
    this.usuariosService
      .loginWithGoogle()
      .then((response) => {
        console.log(response);
        this.router.navigate(['']);
      })
      .catch((error) => console.log(error));
  }
}
