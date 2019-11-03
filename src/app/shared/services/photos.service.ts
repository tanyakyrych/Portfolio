import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhoto } from '../interfaces/photo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/photos';
  };
  public getPhotos(): Observable<Array<IPhoto>> {
    return this.http.get<Array<IPhoto>>(this.url);
  }

  public addPhotos(photo: IPhoto): Observable<Array<IPhoto>> {
    return this.http.post<Array<IPhoto>>(this.url, photo);
  }

  public delPhotos(id: number): Observable<Array<IPhoto>> {
    return this.http.delete<Array<IPhoto>>(`${this.url}/${id}`)
  }

  public editPhotos(photo: IPhoto): Observable<Array<IPhoto>> {
    return this.http.put<Array<IPhoto>>(`${this.url}/${photo.id}`, photo);
  }
}