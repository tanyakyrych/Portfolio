import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContact } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/contacts';

  };
   public getContacts(): Observable<Array<IContact>> {
    return this.http.get<Array<IContact>>(this.url);
  };
  public addContacts(contact: IContact): Observable<Array<IContact>>{
    return this.http.post<Array<IContact>>(this.url, contact);
  };
  public changeStatus(contact: IContact): Observable<Array<IContact>>{
    return this.http.put<Array<IContact>>(`${this.url}/${contact.id}`, contact);
  }
  public delContacts(id:number): Observable<Array<IContact>> {
    return this.http.delete<Array<IContact>>(`${this.url}/${id}`);
  }
} 






