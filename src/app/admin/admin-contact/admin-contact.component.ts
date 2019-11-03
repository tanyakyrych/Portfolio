import { Component, OnInit } from '@angular/core';
import { ContactsService } from './../../shared/services/contacts.service';
import { IContact } from './../../shared/interfaces/contact.interface';
import { NewContact } from './../../shared/classes/new-contact.class';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css'],
  providers: [ContactsService]
})
export class AdminContactComponent implements OnInit {
  adminContacts: Array<IContact> = [];
  contact: IContact;
  adminId: number;
  adminName: string;
  adminPhone: string;
  adminMess: string;
  constructor(private contactsService: ContactsService) {
    this.getContacts()
  }

  ngOnInit() {
  }
  public getContacts(): void {
    this.contactsService.getContacts().subscribe(
      data => {
        this.adminContacts = data;
      },
      err => {
        console.log(err)
      }
    )
  };
  public isDeleteContact(contact: IContact): void {
    const id = contact.id;
    this.contactsService.delContacts(id).subscribe(
      () => {
        this.getContacts();
      })
  };
  public change(contact: IContact): void {
    this.contactsService.changeStatus(contact).subscribe(() => {
      this.getContacts();
    })


  }

}

