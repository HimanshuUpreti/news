import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
showNewsUpdateIcon = false;
showDeleteButton: boolean = this.newMethod();
  constructor(private http: HttpClient) {
   }


  private newMethod(): boolean {
    return false;
  }
}
