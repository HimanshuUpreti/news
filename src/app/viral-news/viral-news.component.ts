import { Component, OnInit } from '@angular/core';
import {  AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Item } from '../Model/DataModel';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-viral-news',
  templateUrl: './viral-news.component.html',
  styleUrls: ['./viral-news.component.css']
})
export class ViralNewsComponent implements OnInit {
items: Observable<any[]>;
itemData: any;
key: any;
showDelete: any = false;
  constructor(private db: AngularFireDatabase, private fs: AngularFireStorage, private serv: ServiceService) {
    this.getRecord();
    this.showDelete = this.serv.showDeleteButton;
  }

  ngOnInit(): void {

  }
  getRecord() {
    this.db.list('news').snapshotChanges().subscribe(
      res => {
        this.itemData = []; this.key = [];
        res.forEach( t => {
          this.itemData.push(t.payload.toJSON());
          this.key.push(t.key);
        });
        console.log(this.itemData);
    });

  }
  deleteRecord(index) {
    this.db.list('/news/' + this.key[index] ).remove();
  }

}
