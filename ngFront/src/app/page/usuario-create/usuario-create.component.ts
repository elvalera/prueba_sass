import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  id: string;
  formulario: FormGroup;
  responseServiceSedes: any;
  sedesList: any;
  responseService: any;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
    ) {

  }

  ngOnInit(): void {
    this.getAllSedes();

    this.formulario = this.formBuilder.group({
      nombre: new FormControl('', Validators.compose([
          Validators.required
      ])),
      email: new FormControl('', Validators.compose([
          Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required
      ])),
      sedeId: new FormControl('', Validators.compose([
        Validators.required
      ])),
      tipoUsuarioId: new FormControl(1, Validators.compose([
        Validators.required
      ])),
    });
  }

  getAllSedes(): void {
    this.restService.get('ciudad/index')
      .then((res) => {
          this.responseServiceSedes = res;

          if(this.responseServiceSedes.status)
          {
            console.log(this.responseServiceSedes);
            this.sedesList = this.responseServiceSedes.data;
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error en validación',
              text: this.responseServiceSedes.message,
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

  submit() {
    console.log(this.formulario.value);

    this.restService.post('usuarios/create', this.formulario.value)
      .then((res) => {
          this.responseService = res;

          if(this.responseService.status)
          {
            Swal.fire({
              icon: 'success',
              title: 'Correcto!',
              text: this.responseService.message,
            });
            this.router.navigate(['/usuarios']);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error en validación',
              text: this.responseService.message,
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
}