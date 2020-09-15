import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  dropdownList = [
    { id : 1, itemName : 'India'},
    { id : 2, itemName : 'Singapore'},
    { id : 3, itemName : 'Australia'},
    { id : 4, itemName : 'Canada'},
    { id : 5, itemName : 'South Korea'}
  ];
  selectedItems = [
    {id : 2, itemName : 'Singapore'},
    {id : 3, itemName : 'Australia'},
    {id : 4, itemName : 'Canada'},
    {id : 5, itemName : 'South Korea'}
];
  credentials = {
    name: '',
    password: ''
  };
  itemValue = {
    name : '',
    message: ''
  };
  login = true;
  show1 = false;
  show2 = false;
  error = false;
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
  }
  ngOnInit(): void {
    this.items = this.db.list('items').valueChanges();
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
}
  loginVerify() {
    if (this.credentials.name === 'user1' && this.credentials.password === 'user1') {
      this.show1 = true;
      this.show2 = false;
      this.login = false;
      this.error = false;
    } else if (this.credentials.name === 'user2' && this.credentials.password === 'user2') {
      this.show2 = true;
      this.show1 = false;
      this.login = false;
      this.error = false;
    } else {
      this.error = true;
    }
  }
  submitUser1() {
    this.itemValue.name = 'User1';
    this.db.list('items').push({ content: this.itemValue });
    this.itemValue.message = '';
  }
  submitUser2() {
    this.itemValue.name = 'User2';
    this.db.list('items').push({ content: this.itemValue });
    this.itemValue.message = '';
  }
}
