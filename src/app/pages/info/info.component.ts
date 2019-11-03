import { Component, OnInit } from '@angular/core';
import { AboutService } from './../../shared/services/about.service';
import { IAbout } from './../../shared/interfaces/about.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [AboutService]

})
export class InfoComponent implements OnInit {
  arrAbout: Array<IAbout> = [];
  infoText: any;
  constructor(private aboutSercice: AboutService) {
    this.getAbout();
  }
  ngOnInit() {
  }
  public getAbout(): void {
    this.aboutSercice.getAbouts().subscribe(
      data => {
        this.arrAbout = data;
        this.infoText = this.arrAbout[0].details;
      },
      err => {
        console.log(err)
      }
    );
  };
  scrollDown(): void {
    document.getElementById("scrollPos").scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

}
