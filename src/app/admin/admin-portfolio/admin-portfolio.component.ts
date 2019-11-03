import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../shared/services/category.service';
import { PhotosService } from './../../shared/services/photos.service';
import { IPhoto } from './../../shared/interfaces/photo.interface';
import { NewPhoto } from './../../shared/classes/new-photo.class';
import { ICategory } from './../../shared/interfaces/category.interface';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';


@Component({
  selector: 'app-admin-portfolio',
  templateUrl: './admin-portfolio.component.html',
  styleUrls: ['./admin-portfolio.component.css'],
  providers: [CategoryService, PhotosService]
})
export class AdminPortfolioComponent implements OnInit {
  adminPhotosHor: Array<IPhoto> = [];
  adminCategory: Array<ICategory> = [];
  photoTitle: string;
  category: ICategory;
  categoryName: string;
  editStatus: boolean = false;
  editID: number;
  obj: any;
  objValue: any;

  // fireStorage
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  image: string = null;
  constructor(private categoryService: CategoryService, private photosService: PhotosService, private afStorage: AngularFireStorage) {
    this.getCategory();
    this.getPhotos();
  }

  ngOnInit() {
  }
  public getCategory(): void {
    this.categoryService.getCategory().subscribe(
      data => {
        this.adminCategory = data;
      },
      err => {
        console.log(err)
      }
    )
  };

  public getPhotos(): void {
    this.photosService.getPhotos().subscribe(
      data => {
        this.adminPhotosHor = data;
      },
      err => {
        console.log(err)
      }
    );
  };

  public isAddPhoto(): void {
    const newPhoto: IPhoto = new NewPhoto(
      0,
      this.category,
      this.photoTitle,
      this.image
    );
    // if (this.adminPhotosHor.length > 0) {
    //   newPhoto.id = this.adminPhotosHor.slice(-1)[0].id + 1;
    // }
    this.photoTitle = '';
    this.image = null;
    this.photosService.addPhotos(newPhoto).subscribe(
      () => {
        this.getPhotos();

      })
  };

  public isDeletePhoto(photo: IPhoto): void {
    const id = photo.id;
    this.photosService.delPhotos(id).subscribe(
      () => {
        this.getPhotos();
      })
  };

  public isEditPhoto(photo: IPhoto): void {
    this.editStatus = true;
    this.photoTitle = photo.title;
    this.categoryName = photo.category.name;
    this.editID = photo.id;
  };

  public isSaveEditPhoto(): void {
    const newPhoto: IPhoto = new NewPhoto(
      this.editID,
      { id: 1, name: this.category.name },
      this.photoTitle,
      this.image
    );
    this.photoTitle = '';
    this.photosService.editPhotos(newPhoto).subscribe(() => {
      this.getPhotos();
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
