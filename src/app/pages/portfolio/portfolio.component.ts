import { Component, OnInit } from '@angular/core';
import { ICategory } from './../../shared/interfaces/category.interface';
import { IPhoto } from './../../shared/interfaces/photo.interface';
import { CategoryService } from './../../shared/services/category.service';
import { PhotosService } from './../../shared/services/photos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [CategoryService, PhotosService]
})
export class PortfolioComponent implements OnInit {
  photos: Array<IPhoto> = [];
  categories: Array<ICategory>;
  categoryName: any;
  photo: IPhoto;
  status: boolean = false;

  constructor(private categoryService: CategoryService, private photosService: PhotosService) {
    this.getCategory();
    this.getPhotos();
  }
  ngOnInit() {
  }
  public getCategory(): void {
    this.categoryService.getCategory().subscribe(
      data => {
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

      },
      err => {
        console.log(err)
      }
    );

  };
  public isGetCategory(event): any {
    this.categoryName = event.toElement.innerText;
  }
}
