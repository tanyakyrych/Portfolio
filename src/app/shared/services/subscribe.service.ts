import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISubscribe } from '../interfaces/subscribe.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/subscribes';

  };
  public getSubscribes(): Observable<Array<ISubscribe>> {
    return this.http.get<Array<ISubscribe>>(this.url);
  };
  public addSubscribes(email: ISubscribe): Observable<Array<ISubscribe>>{
    return this.http.post<Array<ISubscribe>>(this.url, email);
  };
  public changeStatus(subscribe: ISubscribe): Observable<Array<ISubscribe>>{
    return this.http.put<Array<ISubscribe>>(`${this.url}/${subscribe.id}`, subscribe);
  }
  public delSubscribe(id:number): Observable<Array<ISubscribe>> {
    return this.http.delete<Array<ISubscribe>>(`${this.url}/${id}`);
  }
 
}
