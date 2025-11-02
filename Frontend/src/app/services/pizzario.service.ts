import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PizzarioService {
  constructor(private http: HttpClient) {}
  getHomeData() {
    return this.http.get<any[]>('http://localhost:8080/home');
  }
}
