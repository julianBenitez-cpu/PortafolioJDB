import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Data {
  private urlApi:string="http://localhost:3000/proyectos";

  constructor(private http:HttpClient) 
  {

  }

    getProjectsList(): Observable<any>
  {
    return this.http.get(this.urlApi)
  }
}
