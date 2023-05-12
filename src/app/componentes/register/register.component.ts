import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from './../../servicios/usuarios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formGroup: FormGroup;

  ngOnInit(): void {
  }
  constructor(
    private usuariosService: UsuariosService,
    private router : Router
  ){
    this.formGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  onSubmit(){
    this.usuariosService.register(this.formGroup.value)
    .then(response =>{
      console.log(response);
      this.router.navigate(['']);
    })
    .catch(error => console.log(error));
  }
}
