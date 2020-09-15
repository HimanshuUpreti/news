import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  public className = 'box';
  public b;
  public a;
  public key = '&APPID=9e57b03ca79b7aedce0ee555b62408e9';
  public url;
  public data;
  public city;

  public citydata = {
    temp: 0 ,
    name: 'NULL',
    wind: 0,
    description : '',
    rain : false
   };
   prevname: 'NULL';
   loader = false;
  constructor(private http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  ngOnInit(): void {
  }

getdata() {
  this.loader =  true;
  this.http.get(this.url + this.city + this.key).
 subscribe( res => {
   this.data = res;
   console.log(this.data);
   this.loader = false;
   this.citydata.name = this.data.city.name + ' , ' + this.data.city.country;
   this.citydata.temp = Math.floor(this.data.list[1].main.temp - 273.15);
   this.citydata.wind  = Math.ceil(this.data.list[1].wind.speed * 3.6);
   this.citydata.description = this.data.list[1].weather[0].description;
   if (this.data.list[1].weather[0].main === 'Rain') {
    this.citydata.rain = true;
    this.className = 'boxrain';
   } else {
    this.className = 'box';
   }
  }
 );

}

}
