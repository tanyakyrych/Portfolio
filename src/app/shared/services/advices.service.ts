import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAdvice } from '../interfaces/advice.interface';

@Injectable({
  providedIn: 'root'
})
export class AdvicesService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/advices'
  };
  public getAdvices(): Observable<Array<IAdvice>> {
    return this.http.get<Array<IAdvice>>(this.url);
  }

  public addAdvices(advice: IAdvice): Observable<Array<IAdvice>> {
    return this.http.post<Array<IAdvice>>(this.url, advice);
  }

  public delAdvices(id: number): Observable<Array<IAdvice>> {
    return this.http.delete<Array<IAdvice>>(`${this.url}/${id}`)
  }

  public editAdvices(advice: IAdvice): Observable<Array<IAdvice>> {
    return this.http.put<Array<IAdvice>>(`${this.url}/${advice.id}`, advice);
  }
}
