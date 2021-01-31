import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sede-index',
  templateUrl: './sede-index.component.html',
  styleUrls: ['./sede-index.component.css']
})
export class SedeIndexComponent implements OnInit {

  classTable = 'col-md-12';
  ciudadesList: any;
  responseService: any;
  formulario: FormGroup;
  dataRowSelected = null;
  rowSelected = null;

  constructor(private restService: RestService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getAllCiudades();

    this.formulario = this.formBuilder.group({
      inputSearch: new FormControl('', Validators.compose([]))
    });
  }

  getAllCiudades(data = null): void {
    this.restService.get('sede/index', data)
      .then((res) => {
          this.responseService = res;

          if(this.responseService.status)
          {
            this.resetView();
            this.ciudadesList = this.responseService.data;
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

  resetView() {
    this.dataRowSelected = null;
    this.rowSelected = null;
    this.classTable = 'col-md-12';
  }

  search() {
    let data = {
      nombre: this.formulario.controls['inputSearch'].value
    }
    this.getAllCiudades(data);
  }

  updateSede(id) {
    this.router.navigate(['/sedes/update/' + id]);
  }

  selectRow(data, index): void {
    this.classTable = 'col-md-8';
    this.dataRowSelected = data;
    this.rowSelected = index;
  }

}