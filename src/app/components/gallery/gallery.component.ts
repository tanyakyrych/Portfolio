import { Component, OnInit } from '@angular/core';
import { GalleryScriptService } from './../../shared/services/gallery-script.service';
import { map, filter, take, switchMap } from 'rxjs/operators';
import { RecentService } from './../../shared/services/recent.service';
import { IRecent } from './../../shared/interfaces/recent.interface';

declare var $;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [RecentService, GalleryScriptService]
})
export class GalleryComponent {
  arrRecent: Array<IRecent> = [];
  photo: IRecent;

  constructor(private lazyLoadService: GalleryScriptService, private recentService: RecentService) {
    this.getRecentPhotos();

  }

  ngOnInit() {
  }
  public getRecentPhotos(): void {
    this.recentService.getRecentPhotos().subscribe(
      data => {
        this.arrRecent = data;

      },
      err => {
        console.log(err)
      }
    );
  }
  ngAfterContentInit() {
    this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js')
      .pipe(
        map(_ => 'jQuery is loaded'),
        filter(jquery => !!jquery),
        take(1),
        switchMap(_ => this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js')),
      )
      .subscribe(_ => {
        $('.slick-container').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          arrows: false,
          // arrows: true,
          // prevArrow: $('.slick-prev'),
          // nextArrow: $('.slick-next'),
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                // arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]
        });

      });
  }
}
