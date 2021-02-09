import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    httpOptions = {}

    constructor(private http: HttpClient) {
        this.setHeader();
    }

    setHeader(){
        return new Promise(resolve => {
            this.httpOptions = {
                headers: new HttpHeaders({
                    'token': localStorage.getItem('token')
                })
            }
            resolve(true);
        });
    }

    /*** Promesas ***/
    get(action, data = null) {

        if (data != null) {
            let separador = '?';
            let params = '';

            Object.keys(data).forEach(key => {
                separador = (params == '') ? '?' : '&';
                params += separador + key + '=' + data[key];
            });

            action += params;
        }

        return new Promise(resolve => {

            this.setHeader().then((res) => {
                this.http.get(environment.apiUrl + action, this.httpOptions).subscribe(res => {
                    resolve(res);
                }, err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error en validación',
                        text: 'Ocurrio un error en la conexión al servidor',
                    })
                });
            })

        });
    }

    post(action, data) {
        return new Promise(resolve => {
            this.setHeader().then((res) => {
                this.http.post(environment.apiUrl + action, data, this.httpOptions).subscribe(res => {
                    resolve(res);
                }, err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error en validación',
                        text: 'Ocurrio un error en la conexión al servidor',
                    })
                });
            });
        });
    }

    put(action, data) {
        return new Promise(resolve => {
            this.setHeader().then((res) => {
                this.http.put(environment.apiUrl + action, data, this.httpOptions).subscribe(res => {
                    resolve(res);
                }, err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error en validación',
                        text: 'Ocurrio un error en la conexión al servidor',
                    })
                });
            });
        });
    }
}
