import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  products: any | undefined; // Define a property to store the API response

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const id = this.router.url.split('/').slice(-1)[0];
    this.http.get(`http://localhost:3000/api/product/${id}`)
      .subscribe((data: any) => {
        this.products = data; // Store the API response in the products property
      });
  }
}
