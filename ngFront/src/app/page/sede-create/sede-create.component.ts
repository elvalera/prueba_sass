import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sede-create',
  templateUrl: './sede-create.component.html',
  styleUrls: ['./sede-create.component.css']
})
export class SedeCreateComponent implements OnInit {

  id: string;
  formulario: FormGroup;
  responseServiceCiudades: any;
  ciudadesList: any;
  responseService: any;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
    ) {

  }

  ngOnInit(): void {
    this.getAllCiudades();

    this.formulario = this.formBuilder.group({
      nombre: new FormControl('', Validators.compose([
          Validators.required
      ])),
      ciudadId: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  getAllCiudades(): void {
    this.restService.get('ciudad/index')
      .then((res) => {
          this.responseServiceCiudades = res;

          if(this.responseServiceCiudades.status)
          {
            console.log(this.responseServiceCiudades);
            this.ciudadesList = this.responseServiceCiudades.data;
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error en validación',
              text: this.responseServiceCiudades.message,
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

    this.restService.post('sede/create', this.formulario.value)
      .then((res) => {
          this.responseService = res;

          if(this.responseService.status)
          {
            Swal.fire({
              icon: 'success',
              title: 'Correcto!',
              text: this.responseService.message,
            });
            this.router.navigate(['/sedes']);
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