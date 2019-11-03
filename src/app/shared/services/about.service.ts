import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAbout } from '../interfaces/about.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/about';
  };
  public getAbouts(): Observable<Array<IAbout>> {
    return this.http.get<Array<IAbout>>(this.url);
  };
  public editAbouts(str: IAbout): Observable<Array<IAbout>> {
    return this.http.put<Array<IAbout>>(`${this.url}/${str.id}`, str);
  }
 
}
