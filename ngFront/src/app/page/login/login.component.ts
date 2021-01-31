import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    token: string;
    responseServiceToken: any;
    responseServiceLogin: any;
    responseServiceLoginErrs: any;
    textloading: string = "Cargando...";
    resErrsJsonStatus: boolean = false;
    resErrsJson: any;
    isSubmitted: boolean = false;
    jsonErrsMessage: any;
    responseValidateForm : any;

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        public authService: AuthService) {    
    }

    ngOnInit() {
        document.body.className = 'backgroundFullAdd';

        this.loginForm = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.email,
                Validators.required,
                Validators.maxLength(255)
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.maxLength(80)
            ]))
        });

        this.token = localStorage.getItem('accessToken');
        //Primero de valida si tiene token en localStorage
        //this.validateTokenAccess(this.token);
    }

    validateTokenAccess(token) {
        //Primero de valida si tiene token en localStorage
        //Luego se verifica si el token esta en la base de datos
        // consultar usuario con base al token si no hay registro redirect a login
        // si si solo return true
        if(token != null)
        {
            this.authService.post('validate-token', { "accesToken": token })
            .then((res) => {
                this.responseServiceToken = res;
                if (this.responseServiceToken.status)
                {
                    this.router.navigate(['/dashboard']);
                } else {
                    this.logout();
                }
            });

        } else {
            // console.log('Sin token, no estás logueado');
        }
    }

    login() {
        console.log(this.loginForm.value);
        
        this.authService.post('login', this.loginForm.value)
            .then((res) => {
                this.responseServiceLogin = res;

                if(this.responseServiceLogin.status == true)
                {
                    localStorage.setItem('token', this.responseServiceLogin.data.token);
                    this.router.navigate(['/tutorials']);
                } else {
                    Swal.fire({
                      icon: 'error',
                      title: 'Error en validación',
                      text: this.responseServiceLogin.message,
                    })
                }
            }, (err) => {
                console.log(err);
                Swal.fire({
                  icon: 'error',
                  title: 'Error en validación',
                  text: 'Ocurrio un error en la conexión al servidor',
                })
            }
        );
    }

    keyInputForm() {
        this.resErrsJsonStatus = false; //Oculto errores
    }

    logout() {
        localStorage.clear();
    }
}
