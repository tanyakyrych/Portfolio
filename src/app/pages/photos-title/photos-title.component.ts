import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IPhoto } from './../../shared/interfaces/photo.interface';
import { PhotosTitleService } from './../../shared/services/photos-title.service';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from './../../shared/services/photos.service';



@Component({
  selector: 'app-photos-title',
  templateUrl: './photos-title.component.html',
  styleUrls: ['./photos-title.component.css'],
  providers: [PhotosService]
})
export class PhotosTitleComponent implements OnInit {
  photos: Array<IPhoto> = [];
  arrImage: any[] = [];
  images: Array<IPhoto> = [];
  image: any;
  photoTitle: string;
  photoCategory: string;
  number: number;
  view: string;

  constructor(private photosService: PhotosService, private titlePhotosService: PhotosTitleService, private route: ActivatedRoute) {
    this.getPhotos();
  }
  ngOnInit() {
  }
  public getPhotos(): void {
    this.photosService.getPhotos().subscribe(
      data => {
        this.photoCategory = this.route.snapshot.paramMap.get('category.name');
        this.photoTitle = this.route.snapshot.paramMap.get('title');
        this.photos = data;
        this.images = this.photos.filter(x => x.title == this.photoTitle);
        err => { 
          console.log(err)
        }
      });

  };
  public isGetPhoto(id): void {
    this.view = this.images[id].image;
    this.number = id;
    this.arrImage = [];
    this.arrImage = this.images.filter(x => x.image != this.view).map(y => y.image);
    this.arrImage.unshift(this.view);
  };
  public isGetPhoto1(id): void {
    this.view = this.images[id].image;
  }
};


