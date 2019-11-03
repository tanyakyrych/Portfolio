import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecent } from '../interfaces/recent.interface';

@Injectable({
  providedIn: 'root'
})
export class RecentService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/recent';
  };
  public getRecentPhotos(): Observable<Array<IRecent>> {
    return this.http.get<Array<IRecent>>(this.url);
  };
  public addRecentPhotos(photo: IRecent): Observable<Array<IRecent>> {
    return this.http.post<Array<IRecent>>(this.url, photo);
  }

  public delRecentPhotos(id: number): Observable<Array<IRecent>> {
    return this.http.delete<Array<IRecent>>(`${this.url}/${id}`)
  }

  public editRecentPhotos(photo: IRecent): Observable<Array<IRecent>> {
    return this.http.put<Array<IRecent>>(`${this.url}/${photo.id}`, photo);
  }

}
