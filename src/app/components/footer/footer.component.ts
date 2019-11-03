import { Component, OnInit } from '@angular/core';
import { NewSubscribe } from './../../shared/classes/new-subscribe.class';
import { ISubscribe } from './../../shared/interfaces/subscribe.interface';
import { SubscribeService } from './../../shared/services/subscribe.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  newMessage: Array<ISubscribe> = [];
  guestId: number;
  guestEmail: string;
  status: boolean;
  model: any = {};

  constructor(private subscribeService: SubscribeService) {
    this.getSubscribe();
  }

  ngOnInit() { }

  public getSubscribe(): void {
    this.subscribeService.getSubscribes().subscribe(
      data => {
        this.newMessage = data;
      },
      err => {
        console.log(err)
      }
    )
  }
  public sendEmail(emailForm): void {
    if (emailForm.form.valid) {
      const newEmail: ISubscribe = new NewSubscribe(
        this.guestId,
        this.model.useremail,
        this.status
      );
      this.subscribeService.addSubscribes(newEmail).subscribe(() => {
        this.getSubscribe()
      });
      this.model.useremail = '';
      emailForm.reset();
    }
  }
}
