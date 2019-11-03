import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CategoryService } from './shared/services/category.service';
import { ICategory } from './shared/interfaces/category.interface';
import { PhotosService } from './shared/services/photos.service';
import { IPhoto } from './shared/interfaces/photo.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoryService, PhotosService]

})
export class AppComponent {
  photos: Array<IPhoto> = [];
  categories: Array<ICategory>;
  categoryName: any;
  photoCategory: string;

  constructor(private ngxService: NgxUiLoaderService, private categoryService: CategoryService, private photosService: PhotosService, private route: ActivatedRoute) {
    this.getCategory();
    this.getPhotos();

  }

  ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 2000);

    // OR
    this.ngxService.startBackground('do-background-things');
    // Do something here...
    this.ngxService.stopBackground('do-background-things');

    this.ngxService.startLoader('loader-01'); // start foreground spinner of the loader "loader-01" with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stopLoader('loader-01'); // stop foreground spinner of the loader "loader-01" with 'default' taskId
    }, 2000);
  };
  scrollDown(): void {
    document.getElementById("scrollPos").scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
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
