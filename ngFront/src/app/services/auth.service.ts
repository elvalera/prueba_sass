import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    httpOptions = {
        headers: new HttpHeaders({})
    }

    constructor(private http: HttpClient, private router: Router) { }

    post(action, data) {

        return new Promise(resolve => {
            console.log(environment.apiUrl + action);
            this.http.post(environment.apiUrl + action, data, this.httpOptions).subscribe(res => {
                resolve(res);
            }, err => {
                console.log("Error del servicio");
                console.log(err);
            });
        });
    }

    get(action) {

        return new Promise(resolve => {
            this.http.get(environment.apiUrl + action, this.httpOptions).subscribe(res => {
                resolve(res);
            }, err => {
                console.log("Error del servicio");
                console.log(err);
            });
        });
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
