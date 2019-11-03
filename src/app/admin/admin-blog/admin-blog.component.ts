import { Component, OnInit } from '@angular/core';
import { AdvicesService } from './../../shared/services/advices.service';
import { IAdvice } from './../../shared/interfaces/advice.interface';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { NewAdvice } from './../../shared/classes/new-advice.class';
import { map, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css'],
  providers: [AdvicesService]
})
export class AdminBlogComponent implements OnInit {
  adminAdvices: Array<IAdvice> = [];
  adviceTitle: string;
  adviceDescription: string;
  editStatus: boolean = false;
  editID: number;

  // fireStorage
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  image: string;
  constructor(private advicesService: AdvicesService, private afStorage: AngularFireStorage) {
    this.getAdvices();
  };

  ngOnInit() {
  };
  public getAdvices(): void {
    this.advicesService.getAdvices().subscribe(
      data => {
        this.adminAdvices = data;
      },
      err => {
        console.log(err)
      }
    );
  };

  public isAddAdvice(): void {
    const newAdvice: IAdvice = new NewAdvice(
      0,
      this.adviceTitle,
      this.adviceDescription,
      this.image
    );
    // if (this.adminAdvices.length > 0) {
    //   newAdvice.id = this.adminAdvices.slice(-1)[0].id + 1;
    // }
    this.adviceTitle = '';
    this.adviceDescription = '';
    // this.image = null;
    this.advicesService.addAdvices(newAdvice).subscribe(
      () => {
        this.getAdvices();

      })
    console.log(newAdvice);
  };
  public isDeleteAdvice(advice: IAdvice): void {
    const id = advice.id;
    this.advicesService.delAdvices(id).subscribe(
      () => {
        this.getAdvices();
      })
  };

  public isEditAdvice(advice: IAdvice): void {
    this.editStatus = true;
    this.adviceTitle = advice.title;
    this.adviceDescription = advice.description;
    this.editID = advice.id;
  };
  public isSaveEditAdvice(): void {
    const newAdvice: IAdvice = new NewAdvice(
      this.editID,
      this.adviceTitle,
      this.adviceDescription,
      this.image
    );
    this.adviceTitle = '';
    this.adviceDescription = '';
    this.image = null;

    this.advicesService.editAdvices(newAdvice).subscribe(() => {
      this.getAdvices();
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
