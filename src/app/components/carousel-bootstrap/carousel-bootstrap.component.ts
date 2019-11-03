import { Component, OnInit } from '@angular/core';
import { RecentService } from './../../shared/services/recent.service';
import { IRecent } from './../../shared/interfaces/recent.interface';

@Component({
  selector: 'app-carousel-bootstrap',
  templateUrl: './carousel-bootstrap.component.html',
  styleUrls: ['./carousel-bootstrap.component.css'],
  providers: [RecentService]

})
export class CarouselBootstrapComponent implements OnInit {
  arrRecent: Array<IRecent> = [];
  photo: IRecent;

  constructor(private recentService: RecentService) { }

  ngOnInit() {
    this.getRecentPhotos();

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

}
