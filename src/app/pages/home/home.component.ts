import { Component, OnInit } from '@angular/core';
import { IAbout } from './../../shared/interfaces/about.interface';
import { AboutService } from './../../shared/services/about.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AboutService]
})
export class HomeComponent implements OnInit {
  arrAbout: Array<IAbout> = [];
  homeText: any;

  constructor(private aboutSercice: AboutService) {
    this.getAbout();
  }

  ngOnInit() {
  }
  public getAbout(): void {
    this.aboutSercice.getAbouts().subscribe(
      data => {
        this.arrAbout = data;
        this.homeText = this.arrAbout[0].text;
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

