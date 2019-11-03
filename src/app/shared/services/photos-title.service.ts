import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPhoto } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosTitleService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:3000/photos"
  }
  public getPhotoTitle(title: string): Observable<IPhoto> {
    return this.http.get<IPhoto>(`${this.url}/${title}`)
  }
};
