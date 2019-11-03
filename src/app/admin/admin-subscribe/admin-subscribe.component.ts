import { Component, OnInit } from '@angular/core';
import { SubscribeService } from './../../shared/services/subscribe.service';
import { ISubscribe } from './../../shared/interfaces/subscribe.interface';

@Component({
  selector: 'app-admin-subscribe',
  templateUrl: './admin-subscribe.component.html',
  styleUrls: ['./admin-subscribe.component.css'],
  providers: [SubscribeService]
})
export class AdminSubscribeComponent implements OnInit {
  adminSubscribe: Array<ISubscribe> = [];
  constructor(private subscribeService: SubscribeService) {
    this.getSubscribe();
  };
  ngOnInit() {
  };
  public getSubscribe(): void {
    this.subscribeService.getSubscribes().subscribe(
      data => {
        this.adminSubscribe = data;
      },
      err => {
        console.log(err)
      }
    )
  };
  public change(item: ISubscribe): void {
    this.subscribeService.changeStatus(item).subscribe(() => {
      this.getSubscribe();
    })
  };


  public isDelSubscribe(item: ISubscribe): void {
    const id = item.id;
    this.subscribeService.delSubscribe(id).subscribe(
      () => {
        this.getSubscribe();
      })
  }
}


