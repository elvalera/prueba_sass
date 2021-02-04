import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-index',
  templateUrl: './usuario-index.component.html',
  styleUrls: ['./usuario-index.component.css']
})
export class UsuarioIndexComponent implements OnInit {

  classTable = 'col-md-12';
  usuariosList: any;
  responseService: any;
  formulario: FormGroup;
  dataRowSelected = null;
  rowSelected = null;

  constructor(private restService: RestService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getAllSedes();

    this.formulario = this.formBuilder.group({
      inputSearch: new FormControl('', Validators.compose([]))
    });
  }

  getAllSedes(data = null): void {
    this.restService.get('usuarios/index', data)
      .then((res) => {
          this.responseService = res;

          if(this.responseService.status)
          {
            this.resetView();
            this.usuariosList = this.responseService.data;
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
    this.getAllSedes(data);
  }

  updateUsuario(id) {
    this.router.navigate(['/usuarios/update/' + id]);
  }

  selectRow(data, index): void {
    this.classTable = 'col-md-8';
    this.dataRowSelected = data;
    this.rowSelected = index;
  }

}