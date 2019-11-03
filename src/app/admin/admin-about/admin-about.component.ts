import { Component, OnInit } from '@angular/core';
import { IAbout } from './../../shared/interfaces/about.interface';
import { AboutService } from './../../shared/services/about.service';
import { NewAbout } from './../../shared/classes/new-about.class';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css'],
  providers: [AboutService]
})
export class AdminAboutComponent implements OnInit {
  adminAbout: Array<IAbout> = [];
  aboutText: any;
  aboutDetails: any;
  editID: number;
  editStatus: boolean = true;

  constructor(private aboutService: AboutService) {
    this.getAbout();
  }

  ngOnInit() {
  }

  public getAbout(): void {
    this.aboutService.getAbouts().subscribe(
      data => {
        this.adminAbout = data;
      },
      err => {
        console.log(err)
      }
    );
  };
  public isSaveEditAbout(): void {
    const newAbout: IAbout = new NewAbout(
      this.editID,
      this.aboutText,
      this.aboutDetails

    );
    this.aboutText = '';
    this.aboutDetails = '';

    this.aboutService.editAbouts(newAbout).subscribe(
      () => {
        this.getAbout();
      })
  }

  public isEditAbout(item: IAbout): void {
    this.editStatus = true;
    this.editID = item.id;
    this.aboutText = item.text;
    this.aboutDetails = item.details;
  }
};
