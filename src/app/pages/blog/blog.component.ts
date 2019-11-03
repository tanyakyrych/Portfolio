import { Component, OnInit } from '@angular/core';
import { AdvicesService } from './../../shared/services/advices.service';
import { IAdvice } from './../../shared/interfaces/advice.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [AdvicesService]
})
export class BlogComponent implements OnInit {
  arrAdvices: Array<IAdvice>;
  adviceTitle: string;
  constructor(private advicesService: AdvicesService) {
    this.getAdvices();
  }

  ngOnInit() {
  }
  scrollDown(): void {
    document.getElementById("scrollPos").scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  public getAdvices(): void {
    this.advicesService.getAdvices().subscribe(
      data => {
        this.arrAdvices = data;
      },
      err => {
        console.log(err)
      }
    );
  };
}
