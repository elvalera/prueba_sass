import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ciudad-update',
  templateUrl: './ciudad-update.component.html',
  styleUrls: ['./ciudad-update.component.css']
})
export class CiudadUpdateComponent implements OnInit {

  id: string;
  formulario: FormGroup;
  responseService: any;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
    ) {

    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getModel();

    this.formulario = this.formBuilder.group({
      ciudadId: new FormControl(this.id, Validators.compose([
          Validators.required
      ])),
      nombre: new FormControl('', Validators.compose([
          Validators.required
      ])),
    });
  }

  
  getModel() {

    this.restService.get('ciudad/' + this.id)
      .then((res) => {
          this.responseService = res;

          if(this.responseService.status)
          {
            for (let name in this.responseService.data) {
              if (this.formulario.controls[name]) {
                this.formulario.controls[name].setValue(this.responseService.data[name]);
              }
            }
            console.log(this.formulario.value);
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

  submit() {
    console.log(this.formulario.value);

    this.restService.put('ciudad/update', this.formulario.value)
      .then((res) => {
          this.responseService = res;

          if(this.responseService.status)
          {
            Swal.fire({
              icon: 'success',
              title: 'Correcto!',
              text: this.responseService.message,
            });
            this.router.navigate(['/ciudades']);
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