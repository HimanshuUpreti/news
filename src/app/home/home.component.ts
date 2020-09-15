import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?';
  apikey = '&apiKey=03210e09f8d148e983cf5788490a5809';
  data;
  news: [20];
  keyword;
  pageNo = 1;
  country = 'IN';
  constructor(private http: HttpClient ) {
    this.http.get(this.url + 'country=' + this.country + '&page=' + this.pageNo + this.apikey).subscribe(
      res => {
        this.data = res;
        this.news = this.data.articles;
        console.log(this.data);
      }
    );
  }

  ngOnInit(): void {
  }

  getdata(country, pageNo) {
    if (this.country !== country) {
      this.pageNo =  1;
      this.country = country;
    }
    this.http.get(this.url + 'country=' + this.country + '&page=' + this.pageNo + this.apikey).subscribe(
      res => {
        this.data = res;
        this.news = this.data.articles;
        console.log(this.data);
      }
    );
    console.log(this.url + 'country=' + this.country + '&page=' + this.pageNo + this.apikey);
  }

  nextPage() {
    this.pageNo = this.pageNo + 1;
    this.getdata(this.country, this.pageNo);
    window.scroll(0, 0);
  }
  previousPage() {
    this.pageNo = this.pageNo - 1;
    this.getdata(this.country, this.pageNo);
    window.scroll(0, 0);
  }
  getdata2() {
    this.http.get(this.url + 'q=' + this.keyword + this.apikey).subscribe(
      res => {
        this.data = res;
        this.news = this.data.articles;
        console.log(this.data);
      }
    );
  }
}
