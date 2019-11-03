import { Component, OnInit } from '@angular/core';
import { IPhoto } from './../../shared/interfaces/photo.interface';
import { PhotosService } from './../../shared/services/photos.service';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from './../../shared/interfaces/category.interface';
import { CategoryService } from './../../shared/services/category.service';

@Component({
  selector: 'app-portfolio-category',
  templateUrl: './portfolio-category.component.html',
  styleUrls: ['./portfolio-category.component.css'],
  providers: [CategoryService, PhotosService]
})
export class PortfolioCategoryComponent implements OnInit {
  categories: Array<ICategory>;
  photos: Array<IPhoto> = [];
  view: IPhoto;
  arrImgCat: Array<IPhoto> = [];
  arrImage: any[] = [];
  photoCategory: string;
  constructor(private categoryService: CategoryService, private photosService: PhotosService, private route: ActivatedRoute) {
    this.getCategory();
    this.getPhotos();
  }
  ngOnInit() {
  }
  public getCategory(): void {
    this.categoryService.getCategory().subscribe(
      data => {
        this.photoCategory = this.route.snapshot.paramMap.get('category.name');
        this.getPhotos()
        this.categories = data;
      },
      err => {
        console.log(err)
      }
    )
  };
  public getPhotos(): void {
    this.photosService.getPhotos().subscribe(
      data => {
        this.photos = data;
        err => {
          console.log(err)
        }
      })
  };


}
