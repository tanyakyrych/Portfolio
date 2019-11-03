import { Component, OnInit } from '@angular/core';
import { RecentService } from './../../shared/services/recent.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { IRecent } from './../../shared/interfaces/recent.interface';
import { map, finalize } from 'rxjs/operators';
import { NewRecent } from './../../shared/classes/new-recent.class';

@Component({
  selector: 'app-admin-recent',
  templateUrl: './admin-recent.component.html',
  styleUrls: ['./admin-recent.component.css'],
  providers: [RecentService]
})
export class AdminRecentComponent implements OnInit {
  adminRecent: Array<IRecent> = [];
  photo: IRecent;
  editStatus: boolean;
  editID: number;
  // fireStorage
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  image: string = null;
  constructor(private recentService: RecentService, private afStorage: AngularFireStorage) {
    this.getRecentPhotos();
  }

  ngOnInit() {
  }

  public getRecentPhotos(): void {
    this.recentService.getRecentPhotos().subscribe(
      data => {
        this.adminRecent = data;
      },
      err => {
        console.log(err)
      }
    );
  };

  public isAddPhotoR(): void {

    const newPhoto: IRecent = new NewRecent(
      0,
      this.image
    );
    // if (this.adminPhotosHor.length > 0) {
    //   newPhoto.id = this.adminPhotosHor.slice(-1)[0].id + 1;
    // }
    this.image = null;
    this.recentService.addRecentPhotos(newPhoto).subscribe(
      () => {
        this.getRecentPhotos();

      })
  };

  public isDeletePhotoR(photo: IRecent): void {
    const id = photo.id;
    this.recentService.delRecentPhotos(id).subscribe(
      () => {
        this.getRecentPhotos();
      })
  };
  public isEditPhotoR(photo: IRecent): void {
    this.editStatus = true;
    this.editID = photo.id;
  };
  public isSaveEditPhotoR(): void {
    const newPhoto: IRecent = new NewRecent(
      this.editID,
      this.image
    );
    this.recentService.editRecentPhotos(newPhoto).subscribe(() => {
      this.getRecentPhotos();
    })
    this.editStatus = false;
  };

  // method for load
  public upload(event): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(`images/${id}`);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL();
        this.downloadURL.subscribe(url => this.image = url)
      })
    ).subscribe()
  };
}
