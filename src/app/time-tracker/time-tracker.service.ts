import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TimeTrackerService {
  private apiUrl = 'https://fakestoreapi.com/products?limit=10';

  constructor(private http: HttpClient) {}

  getProducts() {
    return firstValueFrom(this.http.get<Product[]>(this.apiUrl));
  }
}
export interface Product {
  id: number;
  title: string;
  price: number;
 rating:any;
 description:string ;
 category:string;
}


