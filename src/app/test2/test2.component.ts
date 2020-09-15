import { Component, OnInit } from '@angular/core';
import {  AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  showBar = true;
  showNewsStatus = false;
  moreNews = false;
  submitButton = false;
  progress = 0;
  imageInfo = {
    heading: '',
    url : '',
    description : ''
  };
  fileName = '';
  selectedImage = '';
  path = '';
  imageStoredURL;
  showUploadMessage = false;
  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) {
  }
  ngOnInit(): void {

  }
  readImage(event) {
    this.selectedImage = event.target.files[0];
    this.fileName = event.target.files[0].name;
  }
  onImageUpload() {
    this.progress = 0;
    this.path = `images/${this.fileName}_${new Date().getTime()}` ;
    this.imageStoredURL = this.storage.ref(this.path);
    this.storage.upload(this.path, this.selectedImage).snapshotChanges().pipe(
      finalize( () => {
        this.imageStoredURL.getDownloadURL().subscribe( url => {
          this.imageInfo.url = url,
           this.submitNews();
           });
      })
    ).subscribe( res => { this.progress = (res.bytesTransferred / res.totalBytes) * 100;
                          document.getElementById('progressBar').style.width = this.progress + '%';
                          document.getElementById('progressBar').innerHTML = Math.floor(this.progress) + '%';
                          if (this.progress === 100) {
                            this.showBar = false;
                          }
    });
  }
  submitNews() {
    this.db.list('news').push({content: this.imageInfo});
    this.showNewsStatus = true;
    this.moreNews = true;
    this.submitButton = false;
    setTimeout(() => { this.showNewsStatus = false; }, 5000);
  }
  showUploadButton() {
    this.showBar = true;
    this.showNewsStatus = false;
    this.moreNews = false;
    alert('Form is reset. You can Upload new Information');
  }

}
