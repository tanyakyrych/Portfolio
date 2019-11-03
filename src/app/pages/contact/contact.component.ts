import { Component, OnInit } from '@angular/core';
import { IContact } from './../../shared/interfaces/contact.interface';
import { NewContact } from './../../shared/classes/new-contact.class';
import { ContactsService } from './../../shared/services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactsService]

})

export class ContactComponent implements OnInit {
  newMessage: Array<IContact> = [];
  guestId: number;
  guestName: string;
  guestPhone: string;
  guestMess: string;
  status: boolean = false;
  pattern: string | RegExp;
  statusForm: boolean = false;

  model: any = {};


  constructor(private contactsService: ContactsService) {
    this.getContacts();
  }

  ngOnInit() {
  }


  scrollDown(): void {
    document.getElementById("scrollPos").scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  public getContacts(): void {
    this.contactsService.getContacts().subscribe(
      data => {
        this.newMessage = data;
      },
      err => {
        console.log(err)
      }
    )
  };
  sendMessage(userForm): void {
    if (userForm.form.valid) {
      const newContact: IContact = new NewContact(
        this.guestId,
        this.model.username,
        this.model.userphone,
        this.model.usermessage,
        this.status
      );
      this.contactsService.addContacts(newContact).subscribe(() => {
        this.getContacts()
      });
      this.statusForm = true;
      // userForm.reset();
      // window.location.reload();

    }
  }
}


